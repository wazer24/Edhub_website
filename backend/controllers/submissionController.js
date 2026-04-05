const Enquiry = require('../models/Enquiry');
const { CLASS_LEVELS, TARGET_EXAMS } = Enquiry;
const { appendLeadToSheet } = require('../services/googleSheets');

/**
 * POST /api/v1/enquiries
 * Validates payload, persists to MongoDB, then appends the same row to Google Sheets.
 */
async function createEnquiry(req, res, next) {
  const body = req.body || {};

  if (!body.studentName || String(body.studentName).trim() === '') {
    return res.status(400).json({ success: false, message: 'studentName is required' });
  }
  if (!body.phone || String(body.phone).trim() === '') {
    return res.status(400).json({ success: false, message: 'phone is required' });
  }

  if (body.classLevel !== undefined && body.classLevel !== null && body.classLevel !== '') {
    if (!CLASS_LEVELS.includes(body.classLevel)) {
      return res.status(400).json({
        success: false,
        message: `classLevel must be one of: ${CLASS_LEVELS.join(', ')}`,
      });
    }
  }
  if (body.targetExam !== undefined && body.targetExam !== null && body.targetExam !== '') {
    if (!TARGET_EXAMS.includes(body.targetExam)) {
      return res.status(400).json({
        success: false,
        message: `targetExam must be one of: ${TARGET_EXAMS.join(', ')}`,
      });
    }
  }

  const doc = await Enquiry.create({
    studentName: String(body.studentName).trim(),
    phone: String(body.phone).trim(),
    email: body.email != null ? String(body.email).trim() : '',
    classLevel: body.classLevel || undefined,
    targetExam: body.targetExam || undefined,
    message: body.message != null ? String(body.message).trim() : '',
    status: 'New',
  });

  await appendLeadToSheet({
    studentName: doc.studentName,
    phone: doc.phone,
    email: doc.email,
    classLevel: doc.classLevel,
    targetExam: doc.targetExam,
    message: doc.message,
    date: doc.createdAt,
  });

  res.status(201).json({
    success: true,
    message: 'Enquiry received successfully',
    data: doc.toObject(),
  });
}

module.exports = { createEnquiry };

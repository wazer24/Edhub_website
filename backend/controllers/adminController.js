const Programme = require('../models/Programme');
const Result = require('../models/Result');
const Alumni = require('../models/Alumni');
const Career = require('../models/Career');
const Enquiry = require('../models/Enquiry');
// --- Programmes ---
async function adminCreateProgramme(req, res) {
  const programme = await Programme.create(req.body);
  res.status(201).json({ success: true, data: programme });
}

async function adminUpdateProgramme(req, res) {
  const programme = await Programme.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!programme) return res.status(404).json({ success: false, message: 'Programme not found' });
  res.json({ success: true, data: programme });
}

async function adminDeleteProgramme(req, res) {
  const programme = await Programme.findByIdAndDelete(req.params.id);
  if (!programme) return res.status(404).json({ success: false, message: 'Programme not found' });
  res.json({ success: true, message: 'Programme deleted', data: programme });
}

// --- Results ---
async function adminCreateResult(req, res) {
  const result = await Result.create(req.body);
  res.status(201).json({ success: true, data: result });
}

async function adminUpdateResult(req, res) {
  const result = await Result.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!result) return res.status(404).json({ success: false, message: 'Result not found' });
  res.json({ success: true, data: result });
}

async function adminDeleteResult(req, res) {
  const result = await Result.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).json({ success: false, message: 'Result not found' });
  res.json({ success: true, message: 'Result deleted', data: result });
}

// --- Alumni ---
async function adminCreateAlumni(req, res) {
  const alumni = await Alumni.create(req.body);
  res.status(201).json({ success: true, data: alumni });
}

async function adminUpdateAlumni(req, res) {
  const alumni = await Alumni.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!alumni) return res.status(404).json({ success: false, message: 'Alumni not found' });
  res.json({ success: true, data: alumni });
}

async function adminDeleteAlumni(req, res) {
  const alumni = await Alumni.findByIdAndDelete(req.params.id);
  if (!alumni) return res.status(404).json({ success: false, message: 'Alumni not found' });
  res.json({ success: true, message: 'Alumni deleted', data: alumni });
}

// --- Careers ---
async function adminCreateCareer(req, res) {
  const career = await Career.create(req.body);
  res.status(201).json({ success: true, data: career });
}

async function adminUpdateCareer(req, res) {
  const career = await Career.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!career) return res.status(404).json({ success: false, message: 'Career not found' });
  res.json({ success: true, data: career });
}

async function adminDeleteCareer(req, res) {
  const career = await Career.findByIdAndDelete(req.params.id);
  if (!career) return res.status(404).json({ success: false, message: 'Career not found' });
  res.json({ success: true, message: 'Career deleted', data: career });
}

// --- Enquiries (leads) ---
async function adminCreateEnquiry(req, res) {
  const enquiry = await Enquiry.create(req.body);
  res.status(201).json({ success: true, data: enquiry });
}

async function adminUpdateEnquiry(req, res) {
  const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!enquiry) return res.status(404).json({ success: false, message: 'Enquiry not found' });
  res.json({ success: true, data: enquiry });
}

async function adminDeleteEnquiry(req, res) {
  const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
  if (!enquiry) return res.status(404).json({ success: false, message: 'Enquiry not found' });
  res.json({ success: true, message: 'Enquiry deleted', data: enquiry });
}

module.exports = {
  adminCreateProgramme,
  adminUpdateProgramme,
  adminDeleteProgramme,
  adminCreateResult,
  adminUpdateResult,
  adminDeleteResult,
  adminCreateAlumni,
  adminUpdateAlumni,
  adminDeleteAlumni,
  adminCreateCareer,
  adminUpdateCareer,
  adminDeleteCareer,
  adminCreateEnquiry,
  adminUpdateEnquiry,
  adminDeleteEnquiry,
};

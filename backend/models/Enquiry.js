const mongoose = require('mongoose');

const CLASS_LEVELS = ['8th', '9th', '10th', '11th', '12th', 'Dropper'];
const TARGET_EXAMS = ['JEE', 'NEET', 'MHT-CET', 'Foundation'];
const STATUS_VALUES = ['New', 'Contacted', 'Enrolled', 'Dropped'];

const enquirySchema = new mongoose.Schema(
  {
    studentName: { type: String, required: [true, 'Student name is required'], trim: true },
    phone: { type: String, required: [true, 'Phone is required'], trim: true },
    email: { type: String, trim: true, default: '' },
    classLevel: {
      type: String,
      enum: { values: CLASS_LEVELS, message: '{VALUE} is not a valid class level' },
    },
    targetExam: {
      type: String,
      enum: { values: TARGET_EXAMS, message: '{VALUE} is not a valid target exam' },
    },
    message: { type: String, trim: true, default: '' },
    status: {
      type: String,
      enum: { values: STATUS_VALUES, message: '{VALUE} is not a valid status' },
      default: 'New',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Enquiry', enquirySchema);
module.exports.CLASS_LEVELS = CLASS_LEVELS;
module.exports.TARGET_EXAMS = TARGET_EXAMS;
module.exports.STATUS_VALUES = STATUS_VALUES;

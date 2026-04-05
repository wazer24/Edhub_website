const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentName: { type: String, required: [true, 'Student name is required'], trim: true },
  initials: { type: String, trim: true, default: '' },
  examCategory: { type: String, trim: true, default: '' },
  rankOrScore: { type: String, trim: true, default: '' },
  programTaken: { type: String, trim: true, default: '' },
  isTopper: { type: Boolean, default: false },
  year: { type: Number },
});

module.exports = mongoose.model('Result', resultSchema);

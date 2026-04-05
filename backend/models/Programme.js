const mongoose = require('mongoose');

const programmeSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'], trim: true },
  categoryId: { type: String, trim: true, default: '' },
  icon: { type: String, trim: true, default: '' },
  targetAudience: { type: String, trim: true, default: '' },
  duration: { type: String, trim: true, default: '' },
  batchIntake: { type: String, trim: true, default: '' },
  highlights: [{ type: String, trim: true }],
  outcomes: [{ type: String, trim: true }],
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Programme', programmeSchema);

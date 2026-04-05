const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'], trim: true },
  department: { type: String, trim: true, default: '' },
  location: { type: String, trim: true, default: '' },
  employmentType: { type: String, trim: true, default: '' },
  description: { type: String, trim: true, default: '' },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Career', careerSchema);

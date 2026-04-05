const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], trim: true },
  batch: { type: String, trim: true, default: '' },
  college: { type: String, trim: true, default: '' },
  currentRole: { type: String, trim: true, default: '' },
  quote: { type: String, trim: true, default: '' },
  imageUrl: { type: String, trim: true, default: '' },
});

module.exports = mongoose.model('Alumni', alumniSchema);

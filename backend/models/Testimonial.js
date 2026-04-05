const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: [true, 'Student name is required'], trim: true },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating must be at most 5'],
    },
    reviewText: { type: String, trim: true, default: '' },
    courseTaken: { type: String, trim: true, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);

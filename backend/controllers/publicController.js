const Programme = require('../models/Programme');
const Result = require('../models/Result');
const Alumni = require('../models/Alumni');
const Career = require('../models/Career');
const Testimonial = require('../models/Testimonial');

/** GET /api/v1/programmes — active programmes only */
async function getProgrammes(req, res) {
  const programmes = await Programme.find({ isActive: true }).sort({ title: 1 }).lean();
  res.json({ success: true, count: programmes.length, data: programmes });
}

/** GET /api/v1/results — optional ?examCategory= & ?isTopper=true|false */
async function getResults(req, res) {
  const filter = {};
  if (req.query.examCategory) {
    filter.examCategory = req.query.examCategory;
  }
  if (req.query.isTopper !== undefined && req.query.isTopper !== '') {
    const v = String(req.query.isTopper).toLowerCase();
    if (v === 'true') filter.isTopper = true;
    else if (v === 'false') filter.isTopper = false;
  }
  const results = await Result.find(filter).sort({ year: -1, studentName: 1 }).lean();
  res.json({ success: true, count: results.length, data: results });
}

/** GET /api/v1/alumni */
async function getAlumni(req, res) {
  const alumni = await Alumni.find({}).sort({ name: 1 }).lean();
  res.json({ success: true, count: alumni.length, data: alumni });
}

/** GET /api/v1/careers — active openings */
async function getCareers(req, res) {
  const careers = await Career.find({ isActive: true }).sort({ title: 1 }).lean();
  res.json({ success: true, count: careers.length, data: careers });
}

/** GET /api/v1/testimonials */
async function getTestimonials(req, res) {
  const testimonials = await Testimonial.find({}).sort({ createdAt: -1 }).lean();
  res.json({ success: true, count: testimonials.length, data: testimonials });
}

module.exports = {
  getProgrammes,
  getResults,
  getAlumni,
  getCareers,
  getTestimonials,
};

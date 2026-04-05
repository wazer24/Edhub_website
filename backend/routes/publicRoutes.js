const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const publicController = require('../controllers/publicController');

const router = express.Router();

router.get('/programmes', asyncHandler(publicController.getProgrammes));
router.get('/results', asyncHandler(publicController.getResults));
router.get('/alumni', asyncHandler(publicController.getAlumni));
router.get('/careers', asyncHandler(publicController.getCareers));
router.get('/testimonials', asyncHandler(publicController.getTestimonials));

module.exports = router;

const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const admin = require('../controllers/adminController');
const auth = require('../middleware/auth');

const router = express.Router();

// Programmes
router.post('/programmes', asyncHandler(admin.adminCreateProgramme));
router.put('/programmes/:id', auth, asyncHandler(admin.adminUpdateProgramme));
router.delete('/programmes/:id', auth, asyncHandler(admin.adminDeleteProgramme));

// Results
router.post('/results', asyncHandler(admin.adminCreateResult));
router.put('/results/:id', auth, asyncHandler(admin.adminUpdateResult));
router.delete('/results/:id', auth, asyncHandler(admin.adminDeleteResult));

// Alumni
router.post('/alumni', asyncHandler(admin.adminCreateAlumni));
router.put('/alumni/:id', auth, asyncHandler(admin.adminUpdateAlumni));
router.delete('/alumni/:id', auth, asyncHandler(admin.adminDeleteAlumni));

// Careers
router.post('/careers', asyncHandler(admin.adminCreateCareer));
router.put('/careers/:id', auth, asyncHandler(admin.adminUpdateCareer));
router.delete('/careers/:id', auth, asyncHandler(admin.adminDeleteCareer));

// Enquiries
router.post('/enquiries', asyncHandler(admin.adminCreateEnquiry));
router.put('/enquiries/:id', auth, asyncHandler(admin.adminUpdateEnquiry));
router.delete('/enquiries/:id', auth, asyncHandler(admin.adminDeleteEnquiry));

module.exports = router;

const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const admin = require('../controllers/adminController');

const router = express.Router();

// Programmes
router.post('/programmes', asyncHandler(admin.adminCreateProgramme));
router.put('/programmes/:id', asyncHandler(admin.adminUpdateProgramme));
router.delete('/programmes/:id', asyncHandler(admin.adminDeleteProgramme));

// Results
router.post('/results', asyncHandler(admin.adminCreateResult));
router.put('/results/:id', asyncHandler(admin.adminUpdateResult));
router.delete('/results/:id', asyncHandler(admin.adminDeleteResult));

// Alumni
router.post('/alumni', asyncHandler(admin.adminCreateAlumni));
router.put('/alumni/:id', asyncHandler(admin.adminUpdateAlumni));
router.delete('/alumni/:id', asyncHandler(admin.adminDeleteAlumni));

// Careers
router.post('/careers', asyncHandler(admin.adminCreateCareer));
router.put('/careers/:id', asyncHandler(admin.adminUpdateCareer));
router.delete('/careers/:id', asyncHandler(admin.adminDeleteCareer));

// Enquiries
router.post('/enquiries', asyncHandler(admin.adminCreateEnquiry));
router.put('/enquiries/:id', asyncHandler(admin.adminUpdateEnquiry));
router.delete('/enquiries/:id', asyncHandler(admin.adminDeleteEnquiry));

module.exports = router;

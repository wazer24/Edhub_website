const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const { createEnquiry } = require('../controllers/submissionController');

const router = express.Router();

router.post('/enquiries', asyncHandler(createEnquiry));

module.exports = router;

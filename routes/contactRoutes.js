const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');
const validateContact = require('../middlewares/validateContact');

router.post('/', validateContact, submitContactForm);

module.exports = router;
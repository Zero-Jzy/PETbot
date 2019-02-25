const express = require('express');
var controller = require('../controllers/other.controller');

var router = express.Router();

router.get('/contact', controller.contact);

router.get('/about-us', controller.about_us);

module.exports = router;
const express = require('express');
var controller = require('../controllers/other.controller');

var router = express.Router();

router.get('/contact', controller.contact);

router.post('/contact', controller.postContact);

router.get('/about-us', controller.about_us);

router.get('/admin/mailbox',controller.mailbox);

module.exports = router;
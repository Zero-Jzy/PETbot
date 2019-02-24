const express = require('express');
var controller = require('../controllers/other.controller');

var router = express.Router();

router.get('/contact', controller.contact);

module.exports = router;
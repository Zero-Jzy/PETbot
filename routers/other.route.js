const express = require('express');
var controller = require('../controllers/other.controller');

var router = express.Router();

router.get('/contact', controller.index);
router.get('/categories', controller.index1);

module.exports = router;
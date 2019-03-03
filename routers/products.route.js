const express = require('express');
var controller = require('../controllers/products.controller');

var router = express.Router();


router.get('/:page', controller.categories);

// router.get('/details', controller.details);

router.get('/detail/:id', controller.detail);

module.exports = router;
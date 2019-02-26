const express = require('express');
var controller = require('../controllers/products.controller');

var router = express.Router();


router.get('/', controller.categories);

// router.get('/details', controller.details);

router.get('/:id', controller.detail);


module.exports = router;
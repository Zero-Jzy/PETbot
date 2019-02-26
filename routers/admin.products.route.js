const express = require('express');
var controller = require('../controllers/admin.product.controller');

var router = express.Router();

router.get('/list-products', controller.listProducts);

router.get('/edit', controller.addProducts);

router.get('/edit/:id', controller.editProducts);

router.post('/edit', controller.postEditProducts);

// router.get('/create', controller.create);
//
// router.post('/create', controller.postCreate);
//
// router.get('/:id', controller.detail);


router.post('/edit/:id', controller.update);


router.delete('/list-products/:id', controller.delete);

module.exports = router;
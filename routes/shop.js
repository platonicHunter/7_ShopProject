const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products' ,shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/order', shopController.getOrder);

router.get('/checkout',shopController.getCheckOut);

module.exports = router;

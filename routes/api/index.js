const express = require('express');
const router = express.Router();
const productController = require('../../controller/api/product');

// @put request to edit the quantity
router.put('/' , productController.edit);

module.exports = router;
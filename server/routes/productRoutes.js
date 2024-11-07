const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/', authMiddleware, createProduct);
router.get('/', getProducts);
router.put('/', authMiddleware, updateProduct);
router.delete('/', authMiddleware, deleteProduct);


module.exports = router;


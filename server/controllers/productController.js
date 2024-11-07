const Product = require('../models/Product.js');

exports.createProduct = async (req, res) => {
    const { name, description, price, stock, category, image } = req.body;
    try {
        const product = await Product.create({ name, description, price, stock, category, image });
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).json({ message: err.mesage });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product Deleted'});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


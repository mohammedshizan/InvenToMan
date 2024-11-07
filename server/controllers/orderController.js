const Order = require('../models/Order.js');

exports.placeOrder = async (req, res) => {
    const { products, totalAmount } = req.body;
    try {
        const order = await Order.create({ user: req.user.id, products, totalAmount });
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('products.product');
        res.json(orders);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


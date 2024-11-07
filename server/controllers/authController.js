const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({ name, email, password });
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d'});
        res.json({ token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d'});
            res.json({ token });
        } else {
            res.status(400).json({ message: 'Invalid Credentials'});
        }      
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

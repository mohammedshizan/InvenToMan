const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        required: true,
        default: 0
    },

    category: {
        type: String
    },

    image: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);


import PropTypes from 'prop-types';
import { useState } from 'react';

const ProductForm = ({ onSubmit, product = {} }) => {
    const [name, setName] = useState((product || {}).name || '');
    const [description, setDescription] = useState((product || {}).description || '');
    const [price, setPrice] = useState((product || {}).price || '');
    const [stock, setStock] = useState((product || {}).stock || '');
    const [category, setCategory] = useState((product || {}).category || '');
    const [image, setImage] = useState((product || {}).image || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, description, price, stock, category, image });
        setName('');
        setDescription('');
        setPrice('');
        setStock('');
        setCategory('');
        setImage('');
    };
        

    return (
        <form onSubmit={handleSubmit} className="product-form border p-4 rounded mb-4">
            <h2 className="text-lg font-bold mb-2">{product && product.id ? 'Edit Product' : 'Add Product'}</h2>
            <input 
            type="text"
            name="name"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input mb-2"
            required
            />
            <input
            type="text" 
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input mb-2"
            required  
            />
            <input
            type="number" 
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input mb-2"
            required  
            />
            <input
            type="number" 
            name="stock"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="input mb-2"
            required  
            />
            <input
            type="text" 
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input mb-2"
            required  
            />
            <input
            type="text" 
            name="image"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="input mb-2"
            required  
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                {product && product.id ? 'Update Product' : 'Add Product'}
            </button>
        </form>
    );
};

ProductForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    product: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        stock: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        category: PropTypes.string,
        image: PropTypes.string,
    }),
};

ProductForm.defaultProps = {
    product: {},
};

export default ProductForm;


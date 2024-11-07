import PropTypes from 'prop-types';



const ProductCard = ({ product, onOrder }) => (
   <div className="product-card border rounded p-4 m-2 shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm">{product.description}</p>
        <p className="text-green-600 font-semibold">Rs {product.price}</p>
        <p className="text-gray-600">Stock: {product.stock}</p>
        <button
            onClick={onOrder}
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
        >
            Order
        </button>
    </div>
    
);


ProductCard.propTypes = {
    product: PropTypes.shape({
        image:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
    onOrder: PropTypes.func.isRequired
};


export default ProductCard;


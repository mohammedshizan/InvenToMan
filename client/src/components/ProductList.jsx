import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

const ProductList = ({ products, onOrder }) => (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} onOrder={() => onOrder(product)} />
        ))}
    </div>
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ),
};

ProductList.propTypes = {
    onOrder: PropTypes.func.isRequired // Ensures onOrder is a function and required
};

export default ProductList;

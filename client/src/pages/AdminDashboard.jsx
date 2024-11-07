import { useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import sampleProducts from "../data/products";

const AdminDashboard = () => {
    const [products, setProducts] = useState(sampleProducts);
    const [editProduct, setEditProduct] = useState(null);

    const addproduct = (product) => {
        const newProduct = { ...product, id: products.length + 1 };
        setProducts([...products, newProduct]);
    };
    const updateProduct = (updatedProduct) => {
        setProducts(
            products.map((product) =>
                product.id === editProduct.id ? { ...updatedProduct, id: product.id} : product
            )
        );
        setEditProduct(null);
    };
    const deleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    return (
        <div className="admin-dashboard p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <ProductForm onSubmit={editProduct ? updateProduct : addproduct} product={editProduct} />
            <ProductList products={products} />
            <div className="product-actions mt-4">
                {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between mb-2">
                        <button
                            onClick={() => setEditProduct(product)}
                            className="bg-yellow-500 text-white"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteProduct(product.id)}
                            className="bg-red-500 text-white"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;


import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState('');

  const { product } = state || {};

  if (!product) {
    return <p>No product selected. Please go back to the dashboard.</p>;
  }

  const handlePlaceOrder = () => {
    const order = {
      product,
      quantity,
      totalAmount: quantity * product.price,
      status: 'Placed',
    };

    // Retrieve existing orders, add the new order, and save back to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = [...existingOrders, order];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setStatus('Your order has been placed.');
    setTimeout(() => navigate('/'), 2000); // Redirect to dashboard after confirmation
  };

  return (
    <div className="order-page p-6">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Product: {product.name}</h3>
        <p className="text-sm">{product.description}</p>
        <p className="text-sm font-bold">Price: ${product.price}</p>
        <label className="block text-sm mt-4">
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="ml-2 p-1 border rounded"
          />
        </label>
        <button
          onClick={handlePlaceOrder}
          className="bg-green-500 hover:bg-green-600 text-white mt-4 py-1 px-3 rounded"
        >
          Place Order
        </button>
      </div>
      {status && <p className="mt-4 text-green-600 font-semibold">{status}</p>}
    </div>
  );
};

export default OrderPage;

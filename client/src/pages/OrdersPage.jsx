import { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="orders-page p-6">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="p-4 mb-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Product: {order.product.name}</h3>
            <p className="text-sm">{order.product.description}</p>
            <p className="text-sm font-bold">Quantity: {order.quantity}</p>
            <p className="text-sm font-bold">Total Amount: ${order.totalAmount}</p>
            <p className="text-sm">Status: {order.status}</p>
          </div>
        ))
      ) : (
        <p>No orders found. Place an order to view it here.</p>
      )}
    </div>
  );
};

export default OrdersPage;

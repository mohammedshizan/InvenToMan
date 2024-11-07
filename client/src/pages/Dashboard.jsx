import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import sampleProducts from '../data/products';

const Dashboard = () => {
  const navigate = useNavigate();

  
  const handleOrder = (product) => {
    navigate('/order', { state: { product } });
  };

  return (
    <div className="user-dashboard p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ProductList products={sampleProducts} onOrder={handleOrder} />
    </div>
  );
};

export default Dashboard;


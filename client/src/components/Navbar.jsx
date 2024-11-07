import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className='text-white text-2xl font-serif'>InvenToMan</div>
                <div>
                    <Link to="/" className='text-white font-semibold mr-4'>Home</Link>
                    <Link to="/orders" className='text-white font-semibold mr-4'>Your Orders</Link>
                    <Link to="/login" className='text-white font-semibold mr-4'>Login</Link>
                    <Link to="/register" className='text-white font-semibold'>Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

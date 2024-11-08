import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className='text-white text-2xl font-serif'>InvenToMan</div>
                
                
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                
                <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} w-full md:w-auto`}>
                    <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
                        <Link to="/" className='text-white font-semibold py-2 md:py-0'>Home</Link>
                        <Link to="/orders" className='text-white font-semibold py-2 md:py-0'>Your Orders</Link>
                        <Link to="/login" className='text-white font-semibold py-2 md:py-0'>Login</Link>
                        <Link to="/register" className='text-white font-semibold py-2 md:py-0'>Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


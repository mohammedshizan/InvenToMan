import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // FiMenu for hamburger, FiX for close

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Always visible title */}
                <div className="text-white text-2xl font-serif">InvenToMan</div>
                
                {/* Hamburger icon for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Links section (dropdown for mobile) */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:flex md:items-center w-full md:w-auto bg-blue-500 md:bg-transparent`}
            >
                <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left items-center md:items-start space-y-4 md:space-y-0 p-4 md:p-0">
                    {/* Title in dropdown */}
                    <div className="text-white text-2xl font-serif md:hidden">InvenToMan</div>

                    {/* Links */}
                    <Link
                        to="/"
                        className="text-white font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/orders"
                        className="text-white font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Your Orders
                    </Link>
                    <Link
                        to="/login"
                        className="text-white font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="text-white font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

 



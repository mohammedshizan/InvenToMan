import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Title always visible */}
                <div className="text-white text-2xl font-serif">InvenToMan</div>

                {/* Hamburger icon for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>

                {/* Links section (hidden on small screens initially) */}
                <div
                    className={`fixed inset-0 top-16 bg-blue-500 p-4 transition-transform duration-300 ease-in-out ${
                        isOpen ? 'block' : 'hidden'
                    } md:static md:flex md:items-center w-full md:w-auto`}
                >
                    <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                        {/* Title remains visible inside the dropdown */}
                        <div className="text-white text-2xl font-serif md:hidden">InvenToMan</div>

                        {/* Links */}
                        <Link to="/" className="text-white font-semibold" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link to="/orders" className="text-white font-semibold" onClick={() => setIsOpen(false)}>
                            Your Orders
                        </Link>
                        <Link to="/login" className="text-white font-semibold" onClick={() => setIsOpen(false)}>
                            Login
                        </Link>
                        <Link to="/register" className="text-white font-semibold" onClick={() => setIsOpen(false)}>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


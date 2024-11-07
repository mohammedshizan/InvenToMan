import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-gray-100 text-center py-20">
            <div className="max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 -mt-12">Welcome to Our Inventory System</h1>
                <p className="text-black-300 mb-8">
                    Streamline your inventory management and boost productivity by keeping track of stock, monitoring product details, managing resources effictively-all in one place.
                </p>
                <img
                    src="/assets/cover-image.jpg"
                    alt="Inventory"
                    className="rounded-lg shadow-lg mb-8 mx-auto"
                    style={{ width: "100%", height: "400px" }}
                            
                />
                    
                <Link to="/login">
                    <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition">
                        Get Started
                    </button>
                </Link>
            </div>

            <div className="bg-white py-10 px-4 shadow-lg rounded-lg max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl font-semibold text-black-800 mb-4">What is Inventory Management System?</h2>
                <p className="text-black-700">
                    Our Inventory Management System is designed to help businesses and individuals manage stock levels, track product information, and improve overall inventory visibility. Whenever you&apos;re handling a small stock or a large inventory, our system is equipped with tools to support streamlined and efficient management processes.
                </p>
            </div>

            <div className="bg-blue-500 text-white py-8 px-6 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Rady to Improve Your Inventory Management?</h3>
                <p className="mb-4">Signup or login to access your dashboard and start managing your inventory like a pro!</p>
                <Link to="/login">
                    <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;


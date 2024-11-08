import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Inventory Management System</h5>
                        <p>Helping you keep track of stock.</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
                        <p className="flex items-center justify-center md:justify-start">
                            <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
                            Address: Manglabag Mirkamal Patna, Cuttack
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
                            Support: 9674523819
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-400" />
                            Sales: support@inventoman.com
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <ClockIcon className="h-5 w-5 mr-2 text-gray-400" />
                            Working Hours: Mon - Fri, 9:00 AM - 6:00 PM
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4">
                    <p className="text-center text-gray-400">
                        &copy; {new Date().getFullYear()} Inventory Management System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
        const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    
        const userData = await loginUser({ email, password });
    
        if (email === adminEmail && password === adminPassword) {
            // Admin login
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/admin');
        } else if (userData && userData.token) {
            // Regular user login
            localStorage.setItem('token', userData.token);
            navigate('/dashboard');
        } else {
            // Invalid credentials
            alert('Invalid Email and Password');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl mb-4">Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border mb-4 p-2 w-full"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border mb-4 p-2 w-full"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Login
            </button>
            
            <div className="text-black mb-8 pt-4 text-center">
                <h3 className="text-xl">If you don&apos;t have an account please<a href="/register" className=" text-black font-bold underline">, SignUp</a>
                </h3>
            </div>
        </form>
    );
};

export default Login;


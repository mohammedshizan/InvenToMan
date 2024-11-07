import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from '../services/api';


const Register = () => {
    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser({ name, email, password });
        navigate('/login')
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl mb-4">Register</h2>
            <input 
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border mb-4 p-2 w-full"
            required 
            />
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
                Register
            </button>
        </form>
    );
};


export default Register;

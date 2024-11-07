import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};


export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};


export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
};


export const createProduct = async (productData, token) => {
    const response = await axios.post(`${API_URL}/products`, productData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};


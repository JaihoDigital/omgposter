import axios from 'axios';


const API = axios.create({
    // baseURL:  process.env.REACT_APP_API_URL ||'http://localhost:5173/api',
    baseURL: 'http://localhost:5000/api',
});


// Attach token automatically
API.interceptors.request.use((config) => {
try {
    const raw = localStorage.getItem('user');
    const user = raw ? JSON.parse(raw) : null;
    if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
} catch (e) {}
    return config;
});


export default API;



import React, { useState, useContext } from 'react';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await API.post('/auth/login', { email, password });
            // Expecting { token, user: { name, role, _id } }
            const payload = { token: res.data.token, name: res.data.user.name, role: res.data.user.role, id: res.data.user._id };
            login(payload);
            navigate('/');
        }catch(err){
            alert('Login failed');
        }
    };


    return (
        <div className='flex justify-center items-center flex-col text-gray-300 h-[80vh]'>
            <h2 className='text-3xl'>Login</h2>
            <form onSubmit={handleSubmit} className="card h-[70vh] w-[50vw]  flex flex-col gap-6 m-3">
                <div className='flex gap-3 mt-5'>
                    <label className='p-4 ml-4 mr-4'>Email</label>
                    <input type='email' value={email} onChange={e=>setEmail(e.target.value)} className='border-2 border-gray-300 rounded-2xl w-full p-4' />
                </div>
                <div className='flex gap-4'>
                    <label className='p-4'>Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='border-2 border-gray-300 rounded-2xl w-full p-4' />
                </div>
                <div className='flex justify-center items-center m-6'>
                    <button className="button w-[50%] rounded-5xl border-2 border-blue-200 shadow-2xl shadow-gray-400" type="submit">Login</button>
                </div>
                <div style={{marginTop:8}} className='flex m-6'>
                    <small>Don't have an account? <Link to="/register">Register</Link></small>
                </div>
            </form>
        </div>
    );
}
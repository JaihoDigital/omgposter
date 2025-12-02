import React, { useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';


export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await API.post('/auth/register', { name, email, password });
            alert('Registration successful. Please login.');
            navigate('/login');
        }catch(err){
            alert('Registration failed');
        }
    };


    return (
        <div className='flex justify-center items-center flex-col min-w-[90vw] gap-6 text-gray-300 h-[90vh]'>
            <h2 className='text-3xl '>Register</h2>
            <form onSubmit={handleSubmit} className="card h-[70vh] w-[50vw]  flex flex-col gap-6 m-3">
                <div className='flex gap-3 mt-5'>
                    <label className='p-4 ml-4 mr-4'>Name</label>
                    <input value={name} onChange={e=>setName(e.target.value)} className='border-2 border-gray-300 rounded-2xl w-full p-4' />
                </div>
                <div className='flex gap-3 mt-5'>
                    <label className='p-4 ml-4 mr-4'>Email</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} className='border-2 border-gray-300 rounded-2xl w-full p-4' />
                </div>
                <div className='flex gap-3 mt-5'>
                    <label className='p-4'>Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='border-2 border-gray-300 rounded-2xl w-full p-4' />
                </div>
                <div className='flex justify-center items-center m-6'>
                <   button className="button w-[50%] rounded-5xl border-2 border-blue-200 shadow-2xl shadow-gray-400" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}
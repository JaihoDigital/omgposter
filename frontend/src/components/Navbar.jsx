import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { GiHamburgerMenu} from 'react-icons/gi'
import { RxCross2 } from "react-icons/rx";


export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false)
    const showSideBar = () => setSidebar(true);
    const closeSideBar = () => setSidebar(false);
    const handleLogout = () => {
        logout();
        navigate('/');
    };


    return (
        <nav className='sticky'>
            <div className="container grid grid-cols-3" >
                <div className='justify-self-start' onClick={showSideBar}>
                    <GiHamburgerMenu size={30} />
                </div>
                {/* --- Sidebar Overlay Background --- */}
                {sidebar && (
                    <div
                    onClick={closeSideBar}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    />
                )}
                <div
                    className={`fixed top-0 left-0 h-full w-[300px] bg-gray-400 shadow-xl z-50 
                    transform transition-transform duration-300
                    ${sidebar ? "translate-x-0" : "-translate-x-full"}`}
                >
                    {/* Close Button */}
                    <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <RxCross2
                        size={28}
                        className="cursor-pointer"
                        onClick={closeSideBar}
                    />
                    </div>

                    {/* Sidebar Content */}
                    <div className="p-4 space-y-4">
                    <Link
                        to="/"
                        className="block text-lg font-medium hover:text-gray-800"
                        onClick={closeSideBar}
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="block text-lg font-medium hover:text-gray-800"
                        onClick={closeSideBar}
                    >
                        Products
                    </Link>

                    <Link
                        to="/contact"
                        className="block text-lg font-medium hover:text-gray-800"
                        onClick={closeSideBar}
                    >
                        Contact
                    </Link>
                    </div>
                </div>
                <div className='justify-self-center'>
                    <Link to="/" className="link" style={{color:'white', fontWeight:700}}>OMG Poster</Link>
                </div>
                <div className='gap-5 flex justify-self-end-safe'>
                    {user ? (
                    <>
                        <span>Hi, {user.name}</span>
                        {user.role === 'admin' && <Link to="/admin" className="link" style={{color:'white'}}>Admin</Link>}
                        <button className="button" onClick={handleLogout}>Logout</button>
                    </>
                    ) : (
                    <>
                        <Link to="/login" className="link" style={{color:'white'}}>Login</Link>
                        <Link to="/register" className="link" style={{color:'white'}}>Register</Link>
                    </>
                    )}
                </div>
            </div>
        </nav>
    );
}
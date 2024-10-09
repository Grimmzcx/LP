import React, { useEffect, useState } from "react";
import logo from '../assets/img/logo.jpg';
import { Link } from 'react-scroll';

function Navbar() {
    const [showText, setShowText] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust this value to your liking
            setShowText(false);
        } else {
            setShowText(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="navbar bg-emerald-400 text-black sticky top-0 z-50">
                <div className="flex-1">
                    <a href="/" className="text-xl text-green-500 mx-10">
                    <img src={logo} className='rounded-full w-10 h-10' alt="Logo" />
                    </a>
                    <div>
                        {showText && (
                            <div className={`transition-opacity duration-300 ${showText ? 'opacity-100' :'opacity-0'}`}>
                            <h1 className="text-green-600 text-2xl font-bold ">JJM</h1>
                            <p className="text-black text-sm ">Soap and Detergents Manufacturing</p>
                        </div>
                        )}
                </div>
                </div>
                <div className="font-bold">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="1" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer bg-cyan-500">Home</Link></li>
                        <li><Link to="2" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer">Products</Link></li>
                        <li><Link to="3" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer">Contact Us</Link></li>
                        <li><Link to="5" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer"></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
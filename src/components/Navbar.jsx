import React from 'react';
import { useState } from 'react';
const Navbar = () => {
    // const [update, setUpdate] = useState([])
    
    return (
        <nav className="bg-white shadow-lg text-gray p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center justify-start ml-0">
                    <div className="   ">
                        <img
                            className="block  h-8 w-auto"
                            src="src/download.png"
                            alt="Logo"
                        />

                    </div>
                    <div className="ml-20 w-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-2 py-1 rounded-md outline-slate-200 w-auto"
                            // onChange={searchHandle}
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4 " >
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Services</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                    <div className="ml-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                            Login
                        </button>
                        <button className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>



    );
};

export default Navbar;
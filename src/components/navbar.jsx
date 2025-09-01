import { Search } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const nevref = useRef();
    const location = useLocation();

    const isHome = location.pathname === "/";

    useGSAP(() => {
        gsap.from(nevref.current, {
            y: -130,
            duration: 1
        });
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={` z-50 transition-all duration-300 
            ${
                isHome
                    ? scrolled
                        ? "bg-black/80 backdrop-blur-md absolute top-0 left-0 right-0"
                        : "bg-transparent absolute top-0 left-0 right-0"
                    : "bg-white text-black "
            }`}
        >
            <div className="mt-2" ref={nevref}>
                {/* Top Row */}
                <div
                    className={`p-1 px-4 flex w-full justify-between items-center text-sm ${
                        isHome ? "text-white/80" : "text-black/80"
                    }`}
                >
                    <div>
                        <p>Language: English</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="hover:opacity-100 cursor-pointer transition-colors">Where to buy</p>
                        <p className="hover:opacity-100 cursor-pointer transition-colors">Contact</p>
                        <p className="hover:opacity-100 cursor-pointer transition-colors">Login/Signup</p>
                    </div>
                </div>

                {/* Bottom Row */}
                <div
                    className={`transition-all duration-300 border-b-[0.5px] border-t-[0.5px] mt-2 ${
                        isHome
                            ? scrolled
                                ? "border-white/20"
                                : "border-white/10"
                            : "border-black/10"
                    }`}
                >
                    <div className="flex items-center gap-5 pt-5 w-full p-5 px-8">
                        <p
                            className={`font-black text-3xl ${
                                isHome ? "text-white" : "text-black"
                            }`}
                        >
                            unios.
                        </p>

                        <div className="flex gap-5 justify-between w-full">
                            {/* Left menu */}
                            <div>
                                <ul
                                    className={`flex gap-5 ${
                                        isHome ? "text-white" : "text-black"
                                    }`}
                                >
                                    <li className="flex items-center gap-2">
                                        <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-semibold">
                                            NEW
                                        </span>
                                        <span>2025</span>
                                    </li>
                                    <li className="hover:opacity-70 cursor-pointer transition-colors">Products</li>
                                    <li className="hover:opacity-70 cursor-pointer transition-colors">Projects</li>
                                    <li className="hover:opacity-70 cursor-pointer transition-colors">Stories</li>
                                    <li className="hover:opacity-70 cursor-pointer transition-colors">Resources</li>
                                    <li className="hover:opacity-70 cursor-pointer transition-colors">Brand</li>
                                </ul>
                            </div>

                            {/* Right menu */}
                            <div>
                                <ul
                                    className={`flex items-center gap-4 ${
                                        isHome ? "text-white" : "text-black"
                                    }`}
                                >
                                    <li className="hover:opacity-70 cursor-pointer transition-colors">My Toolbox</li>
                                    <li className="hover:opacity-70 cursor-pointer transition-colors">
                                        <Search size={18} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

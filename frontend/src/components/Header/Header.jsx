import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Header = () => {
    const [expand, setExpand] = useState(false);
    
    const toggleExpand = () => {
        setExpand(!expand);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setExpand(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${expand ? "h-48 border-t-2 border-black" : ""} fixed bottom-0 sm:top-0 sm:flex sm:justify-between z-50  w-full h-16 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 `}>
            <div className='flex justify-between capitalize text-lg font-semibold py-4 sm:px-10 md:px-16 px-5'>
                <span className={`${expand ? "hidden" : ""} hover:cursor-pointer`}>Pradatta</span>
                <button className={`${expand ? "fixed bottom-2 right-2 p-[12px]" : ""} sm:hidden items-center justify-center pt-2`} onClick={toggleExpand}><IoMenu /></button>
            </div>
            <div className={`sm:flex md:gap-6 sm:gap-4 py-4  text-center md:pr-56 sm:px-16 ${expand ? "grid grid-cols-2 " : "hidden"}`}>
                {["Home", "Search","Create","Saved",  "logout"].map((item, index) => (
                    <div className={`${expand ? "pb-2" : ""} capitalize text-lg font-semibold hover:cursor-pointer`} key={index}><Link   to={`/${item.toLowerCase()}`}>{item}</Link></div>
                ))}
            </div>
        </div>
    );
}

export default Header;

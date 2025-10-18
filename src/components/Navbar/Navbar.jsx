import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav flex gap-3">
                <NavLink to={'/'} className="text-accent">Home</NavLink>
                <NavLink to={'/about'} className="text-accent">About</NavLink>
                <NavLink to={'/career'} className="text-accent">Career</NavLink>
            </div>
            <div className="login-btn flex gap-3">
                <img className='w-[40px] h-[40px] rounded-full' src={user} alt="" />
                <button className='bg-primary rounded-lg px-8 py-2 font-semibold text-white cursor-pointer'>LogIn</button>
            </div>
        </div>
    );
};

export default Navbar;
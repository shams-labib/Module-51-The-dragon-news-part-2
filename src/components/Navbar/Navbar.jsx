import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from "../../assets/user.png"
import { AuthContext } from '../../Firebase/AuthContext/AuthProvider';

const Navbar = () => {

    const {user, signOutFunction} = use(AuthContext);

    const handleLogOut = ()=>{
        signOutFunction().then(result =>{
            alert("LogOut Success")
        }).catch(err =>{
            console.log(err);
            alert(err.message)
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <div className="">
                {user ? user.email : ""}
            </div>
            <div className="nav flex gap-3">
                <NavLink to={'/'} className="text-accent">Home</NavLink>
                <NavLink to={'/about'} className="text-accent">About</NavLink>
                <NavLink to={'/career'} className="text-accent">Career</NavLink>
            </div>
            <div className="login-btn flex gap-3">
                <img className='w-[40px] h-[40px] rounded-full' src={userImg} alt="" />
                {
                    user ? <Link to={'/'} onClick={handleLogOut} className='bg-primary rounded-lg px-8 py-2 font-semibold text-white cursor-pointer'>LogOut</Link> : <Link to={'/auth/login'} className='bg-primary rounded-lg px-8 py-2 font-semibold text-white cursor-pointer'>Log In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
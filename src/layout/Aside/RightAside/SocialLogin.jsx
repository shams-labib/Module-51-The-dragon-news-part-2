import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='p-2'>
            <h1 className='text-lg font-semibold mb-5'>Log In With</h1>

            <div className='space-y-3 grid grid-cols-1'>
                <button className='btn btn-outline btn-secondary'><span><FcGoogle size={24}></FcGoogle></span>Log In With Google</button>
                <button className='btn btn-outline btn-primary'><span><FaGithub size={24}></FaGithub></span>Log In With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
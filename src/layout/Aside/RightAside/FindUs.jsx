import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='p-2 space-y-5'>
            <h1 className='text-lg font-semibold'>Find Us On</h1>

            <div className="grid grid-cols-1">
                <div className="join join-vertical">
  <button className="btn join-item py-6 bg-white justify-start"><span className='bg-gray-100 rounded-full p-2'><FaFacebookF /></span>Facebook</button>
  <button className="btn join-item py-6 bg-white justify-start"><span className='bg-gray-100 rounded-full p-2'><FaTwitter color='blue' /></span>Twitter</button>
  <button className="btn join-item py-6 bg-white justify-start"><span className='bg-gray-100 rounded-full p-2'><FaInstagram color='purple' /></span>Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;
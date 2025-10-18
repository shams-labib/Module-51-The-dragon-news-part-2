import React from 'react';
import swimingImg from  '../../../assets/swimming.png'
import classimg from  '../../../assets/class.png'
import PlayGround from  '../../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-300 p-3 rounded-lg'>
            <h1 className='text-lg font-semibold'>  Qzone</h1>
            <div className="space-y-5 mt-5">
                <img src={swimingImg} alt="" />
                <img src={classimg} alt="" />
                <img src={PlayGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
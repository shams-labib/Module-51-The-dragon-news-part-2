import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-2'>
            
                <button className='w-[110px] h-[43px] bg-secondary text-white font-semibold'>Latest</button>
            <Marquee className='flex gap-5' pauseOnClick={true} speed={60}>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sit?</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sit?</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sit?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
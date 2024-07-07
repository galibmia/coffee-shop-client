import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";


const BackHome = () => {
    return (
        <div className='flex items-center gap-2'>
            <FaArrowLeftLong />
            <h2 className='rancho-regular text-3xl'>Back to home</h2>
        </div>
    );
};

export default BackHome;
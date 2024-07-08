import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const BackHome = () => {
    return (
        <div className='flex items-center gap-2'>
            <Link to={'/'}><FaArrowLeftLong /></Link>
            <Link to={'/'}><h2 className='rancho-regular text-3xl'>Back to home</h2></Link>
        </div>
    );
};

export default BackHome;
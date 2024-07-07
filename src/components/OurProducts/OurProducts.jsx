import React from 'react';
import "./OurProducts.css"
import { TbMug } from "react-icons/tb";
import { Link } from 'react-router-dom';

const OurProducts = () => {

    return (
        <div className='products-bg'>
            <p className='text-[#1B1A1A] text-lg raleway-regular text-center'>--- Sip & Savor ---</p>
            <h1 className='text-[#331A15] text-6xl rancho-regular text-center mt-2'>Our Popular Products</h1>
            <Link to='/add-coffee'><button className='w-44 mx-auto flex items-center gap-2 text-2xl text-white rancho-regular mt-4 px-5 py-2 rounded-md bg-[#E3B577] border-2 border-[#331A15]'><span className='drop-shadow-xl'>Add Coffee</span> <TbMug className='mt-1 text-[#1B1A1A]' /></button></Link>

            <div>

            </div>
        </div>
    );
};

export default OurProducts;
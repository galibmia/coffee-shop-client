import React from 'react';
import "./Header.css"
import logo from "../../assets/images/more/logo1.png"

const Header = () => {
    return (
        <div className='header-bg flex items-center justify-center gap-4'>
            <img className='w-20 h-24' src={logo} alt="" />
            <h1 className='rancho-regular text-6xl text-white'>Espresso Emporium</h1>
        </div>
    );
};

export default Header;
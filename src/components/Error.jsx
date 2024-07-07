import React from 'react';
import errorImage from "../assets/images/404/404.gif"
import BackHome from './shared/BackHome';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-1/2 mx-auto mt-10'>
            <div className='w-48 mx-auto'>
                <Link to='/'><BackHome></BackHome></Link>
            </div>
            <img src={errorImage} alt="Error Image" />
        </div>
    );
};

export default Error;
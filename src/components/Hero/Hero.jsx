import React from 'react';
import "./Hero.css"
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero-bg flex '>
            <div className='mt-10 md:mt-96 w-4/5 mx-auto'>
            <div className='ms-custom-50'>
                <h1 className='text-4xl md:text-6xl rancho-regular text-white mb-4'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-white text-base raleway-regular'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <a href='#ourProducts'><button className='bg-[#E3B577] rancho-regular text-2xl px-6 py-2 rounded-sm mt-8 btn-custom'>Learn More</button></a>
            </div>
            </div>
        </div>
    );
};

export default Hero;
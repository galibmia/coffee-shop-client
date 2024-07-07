import React from 'react';
import Hero from './Hero/Hero';
import img1 from "../assets/images/icons/1.png"
import img2 from "../assets/images/icons/2.png"
import img3 from "../assets/images/icons/3.png"
import img4 from "../assets/images/icons/4.png"
import coffeeImg1 from "../assets/images/cups/Rectangle 10.png"
import coffeeImg2 from "../assets/images/cups//Rectangle 11.png"
import coffeeImg3 from "../assets/images/cups/Rectangle 12.png"
import coffeeImg4 from "../assets/images/cups/Rectangle 13.png"
import coffeeImg5 from "../assets/images/cups/Rectangle 14.png"
import coffeeImg6 from "../assets/images/cups/Rectangle 15.png"
import coffeeImg7 from "../assets/images/cups/Rectangle 16.png"
import coffeeImg8 from "../assets/images/cups/Rectangle 9.png"
import OurProducts from './OurProducts/OurProducts';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            {/* Service Section */}
            <div className='bg-[#ECEAE3] '>
                <div className='w-full md:w-9/12 px-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-10'>
                    <div>
                        <img className='h-20' src={img1} alt="" />
                        <h1 className='text-[#331A15] text-4xl rancho-regular mt-4'>Awesome Aroma</h1>
                        <p className='text-[#1B1A1A] text-lg mt-4 raleway-regular'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img className='h-20' src={img2} alt="" />
                        <h1 className='text-[#331A15] text-4xl rancho-regular mt-4'>High Quality</h1>
                        <p className='text-[#1B1A1A] text-lg mt-4 raleway-regular'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img className='h-20' src={img3} alt="" />
                        <h1 className='text-[#331A15] text-4xl rancho-regular mt-4'>Pure Grades</h1>
                        <p className='text-[#1B1A1A] text-lg mt-4 raleway-regular'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img className='h-20' src={img4} alt="" />
                        <h1 className='text-[#331A15] text-4xl rancho-regular mt-4'>Proper Roasting</h1>
                        <p className='text-[#1B1A1A] text-lg mt-4 raleway-regular'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
            {/* Our Popular Products Section */}
            <OurProducts></OurProducts>
            <div className='mb-32'>
                <p className='text-[#1B1A1A] text-lg raleway-regular text-center'>Follow Us Now</p>
                <h1 className='text-[#331A15] text-6xl rancho-regular text-center mt-2'>Follow on Instagram</h1>
                <div className='w-full md:w-9/12 px-10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 py-10'>
                <img className='w-full' src={coffeeImg1} alt="" />
                <img className='w-full' src={coffeeImg2} alt="" />
                <img className='w-full' src={coffeeImg3} alt="" />
                <img className='w-full' src={coffeeImg4} alt="" />
                <img className='w-full' src={coffeeImg4} alt="" />
                <img className='w-full' src={coffeeImg6} alt="" />
                <img className='w-full' src={coffeeImg7} alt="" />
                <img className='w-full' src={coffeeImg8} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Home;
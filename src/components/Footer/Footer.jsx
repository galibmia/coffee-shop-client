import React from 'react';
import "./Footer.css"
import logo from "../../assets/images/more/logo1.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";



const Footer = () => {
    return (
        <div>
            <div className='w-9/12 mx-auto mt-32 mb-12 flex gap-40 justify-between'>
                <div className='w-1/2'>
                    <img className='w-20 h-24' src={logo} alt="" />
                    <h1 className='text-[#331A15] text-5xl rancho-regular mt-6'>Espresso Emporium</h1>
                    <p className='text-[#1B1A1A] text-xl mt-8 raleway-regular'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-5 mt-8'>
                        <FaFacebook className='text-[#331A15] text-5xl cursor-pointer' />
                        <FaTwitter className='text-[#331A15] text-5xl cursor-pointer' />
                        <FaInstagram className='text-[#331A15] text-5xl cursor-pointer' />
                        <FaLinkedin className='text-[#331A15] text-5xl cursor-pointer' />
                    </div>
                    <h1 className='text-[#331A15] text-5xl rancho-regular mt-6'>Get in Touch</h1>
                    <div className='mt-8'>
                        <p className='text-[#1B1A1A] raleway-regular text-xl flex items-center gap-6 mb-4'><IoCall  className='text-[#331A15]'/> <span>+88 01533 333 333</span></p>
                        <p className='text-[#1B1A1A] raleway-regular text-xl flex items-center gap-6 mb-4'><IoIosMail className='text-[#331A15]' /><span>info@espresso.com</span></p>
                        <p className='text-[#1B1A1A] raleway-regular text-xl flex items-center gap-6 mb-4'><FaLocationDot className='text-[#331A15]' /><span>72, Wall street, King Road, Dhaka</span></p>
                    </div>

                </div>
                <div className=' w-2/5 mt-24'>
                    <h1 className='text-[#331A15] text-5xl rancho-regular mt-6'>Connect with Us</h1>
                    <form>
                        <input className='w-4/5 p-3 custom-border mt-8' type="text" placeholder='Name' />
                        <input className='w-4/5 p-3 mt-8 custom-border' type="email" placeholder='Email' />
                        <textarea className='w-4/5 p-3 mt-8 custom-border text-area' name="message"  placeholder='Message' id=""></textarea>
                        <button className='rancho-regular mt-8 w-1/2 border-2 border-[#331A15] rounded-full text-2xl'>Send Message</button>
                    </form>
                </div>
            </div>
            <div className='footer-bottom-bg flex items-center justify-center'>
                <p className='rancho-regular text-xl text-white'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
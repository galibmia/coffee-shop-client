import React from 'react';
import "./OurProducts.css"
import { TbMug } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';



const OurProducts = ({ coffeesData, setCoffeesData }) => {

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-shop-server-376z.onrender.com/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = coffeesData.filter(coffee => coffee._id !== id);
                        setCoffeesData(remaining);
                    })
            }
        });


    }

    return (
        <div className='products-bg'>
            <p className='text-[#1B1A1A] text-lg raleway-regular text-center'>--- Sip & Savor ---</p>
            <h1 className='text-[#331A15] text-6xl rancho-regular text-center mt-2'>Our Popular Products</h1>
            <Link to='/add-coffee'><button className='w-44 mx-auto flex items-center gap-2 text-2xl text-white rancho-regular mt-4 px-5 py-2 rounded-md bg-[#E3B577] border-2 border-[#331A15]'><span className='drop-shadow-xl'>Add Coffee</span> <TbMug className='mt-1 text-[#1B1A1A]' /></button></Link>

            <div className='w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 mt-10'>
                {
                    coffeesData.map(coffee =>
                        <div key={coffee._id} className="card card-side shadow-xl py-20 md:py-0 p-2 md:p-4 flex-col md:flex-row items-center">
                            <figure>
                                <img
                                    src={coffee.photo}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body mt-5">
                                <h2 className="text-xl raleway-regular"><span className='font-bold'>Name :</span> {coffee.name}</h2>
                                <h2 className="text-xl raleway-regular"><span className='font-bold'>Chef :</span> {coffee.chef}</h2>
                                <h2 className="text-xl raleway-regular"><span className='font-bold'>Price :</span> {coffee.price} Taka</h2>
                            </div>
                            <div className="card-actions justify-end mt-10 me-10">
                                <div>
                                    <Link to={`view-coffee/${coffee._id}`}><button className="h-10 bg-[#D2B48C] p-2 rounded-md md:block"><FaEye className='text-2xl text-gray-200' /></button></Link>
                                    <Link to={`update-coffee/${coffee._id}`}><button className="h-10 bg-[#3C393B] p-2 rounded-md md:block mx-3 md:mx-0 md:my-3"><MdModeEdit className='text-2xl text-gray-200' /></button></Link>
                                    <button onClick={() => handleDelete(coffee._id)} className="h-10 bg-[#EA4744] p-2 rounded-md md:block"><MdDelete className='text-2xl text-gray-200' /></button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default OurProducts;
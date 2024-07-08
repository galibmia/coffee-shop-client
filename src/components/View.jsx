import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdModeEdit, MdDelete } from "react-icons/md";
import BackHome from './shared/BackHome';

const View = () => {
    const loadedData = useLoaderData()
    const {name, chef, supplier, taste, category, details, photo, price} = loadedData;
    return (
        <div className='w-9/12 mx-auto mt-8'> 
            <BackHome></BackHome>
            <div className="w-1/2 mx-auto mt-5 card card-side shadow-xl p-4 items-center">
                <figure className='w-full'>
                    <img
                        className=''
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl raleway-regular"><span className='font-bold'>Name :</span> {name}</h2>
                    <h2 className="text-xl raleway-regular"><span className='font-bold'>Chef :</span> {chef}</h2>
                    <h2 className="text-xl raleway-regular"><span className='font-bold'>Price :</span> {price} Taka</h2>
                    <h2 className="text-xl raleway-regular"><span className='font-bold'>Supplier :</span> {supplier}</h2>
                    <h2 className="text-xl raleway-regular"><span className='font-bold'>Taste :</span> {taste}</h2>
                    <h2 className="text-xl raleway-regular"><span className='font-bold'>Category :</span> {category}</h2>
                    <h2 className="text-xl raleway-regular"><span className='font-bold'>Details :</span> {details}</h2>

                </div>
            </div>
        </div>
    );
};

export default View;
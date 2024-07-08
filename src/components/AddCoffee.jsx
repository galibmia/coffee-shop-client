import React from 'react';
import BackHome from './shared/BackHome';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo, price };

        fetch('https://coffee-shop-server-376z.onrender.com/coffees', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully added!',
                        text: 'You added coffee successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })


    }

    return (
        <div className='w-9/12 mx-auto mt-8'>
            <BackHome></BackHome>
            <div className='bg-[#F4F3F0] py-14 mt-8 rounded-md'>
                <div className='md:ms-48 md:me-48'>
                    <h1 className='text-[#331A15] text-6xl rancho-regular text-center mt-2'>Add New Coffee</h1>
                    <p className='text-[#1B1A1A] text-lg raleway-regular text-center mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee} className='mt-10 w-4/5 mx-auto'>
                    <div className='md:flex gap-4'>
                        <div className='w-full md:w-4/5 '>
                            <p className='mb-2 raleway-bold text-xl text-[#1B1A1ACC]'>Name</p>
                            <input className='w-full p-3 custom-border border-2' type="text" required placeholder='Enter coffee name' name='name' />
                        </div>
                        <div className='w-full md:w-4/5 '>
                            <p className='mb-2 raleway-bold text-xl text-[#1B1A1ACC]'>Chef</p>
                            <input className='w-full p-3 custom-border border-2' type="text" required placeholder='Enter coffee chef' name='chef' />
                        </div>
                    </div>
                    <div className='md:flex gap-4 mt-8'>
                        <div className='w-full md:w-4/5 '>
                            <p className='mb-2 raleway-bold text-xl text-[#1B1A1ACC]'>Supplier</p>
                            <input className='w-full p-3 custom-border border-2' type="text" required placeholder='Enter coffee supplier' name='supplier' />
                        </div>
                        <div className='w-full md:w-4/5 '>
                            <p className='mb-2 raleway-bold text-xl text-[#1B1A1ACC]'>Taste</p>
                            <input className='w-full p-3 custom-border border-2' type="text" required placeholder='Enter coffee taste' name='taste' />
                        </div>
                    </div>
                    <div className='md:flex gap-4 mt-8'>
                        <div className='w-full md:w-4/5 '>
                            <p className='mb-2 raleway-bold text-xl text-[#1B1A1ACC]'>Category</p>
                            <input className='w-full p-3 custom-border border-2' type="text" required placeholder='Enter coffee category' name='category' />
                        </div>
                        <div className='w-full md:w-4/5 '>
                            <p className='mb-2 raleway-bold text-xl text-[#1B1A1ACC]'>Details</p>
                            <input className='w-full p-3 custom-border border-2' type="text" required placeholder='Enter coffee details' name='details' />
                        </div>
                    </div>
                    <div className='md:flex gap-4 mt-8'>
                        <div className='w-full md:w-4/5 '>
                            <p className='mb-2 raleway-bold text-xl text-[#1B1A1ACC]'>Photo</p>
                            <input className='w-full p-3 custom-border border-2' type="text" required placeholder='Enter photo URL' name='photo' />
                        </div>
                        <div className='w-full md:w-4/5 '>
                            <p className='mb-2 raleway-bold text-xl text-[#1B1A1ACC]'>Price</p>
                            <input className='w-full p-3 custom-border border-2' type="text" required placeholder='Enter coffee price' name='price' />
                        </div>
                    </div>
                    <input className='w-full bg-[#f7d19f] hover:bg-[#ffb554] text-[#331A15] mt-6 py-3 border-2 border-[#331A15] rancho-regular text-2xl rounded-md cursor-pointer' type="submit" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-1 grid-flow-row md:grid-cols-2 gap-2 px-4 mx-4 my-3 items-center'>
                <div className='p-4 order-2 md:order-1 '>
                    <div className='p-2 mb-1'>
                        <div className='sm:text-4xl  md:text-6xl  lg:text-7xl capitalize font-semibold tracking-wide pb-4'>One Step Closer To Your <span className='text-indigo-500'> Dream Job</span> </div>
                    <p className='pb-5 text-[#757575]'> Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='Btn-button-indigo'> Get Started </button>
                    </div>
               
                </div>
                <div className=' order-1 md:order-2'>
                    <img className='object-cover w-full ' src='/src/assets/components/images/person-photo.png' alt="" />

                </div>
            </div>
        </div>
    );
};

export default Home;
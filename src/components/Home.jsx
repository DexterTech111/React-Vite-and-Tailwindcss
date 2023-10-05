import React, { useEffect, useState } from 'react';

import HeroImage from '../assets/Illustration.png';
import Typed from 'react-typed';
import { Carousel } from 'flowbite-react';


const Home = () => {
   
  
    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-2xl  mx-auto min-h-screen h-screen
            '>
                 <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse gap-16 items-center justify-between ">
                        <div className='items-center justify-center'>
                            <img src={HeroImage} alt='' className="w-5/6 " />
                        </div>

                        {/* Hero Text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-2xl md:text-5xl   font-semibold mb-4 text text-neutralDGrey  leading-snug'>Lessons and insights 
                                <span className="text-brandPrimary leading-snug">
                                    <Typed
                                        strings={['From 8 years', 'from 4 months']}
                                        typeSpeed={50}
                                        backSpeed={25}
                                        loop
                                        />
                                        
                                </span> 
                            </h1>
                            <p className="text-neutralGrey text-base mb-8"> Where to grow your business as a photographer: site or social media?</p>
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse gap-16 items-center justify-between ">
                        <div className='items-center justify-center'>
                            <img src={HeroImage} alt='' className="w-5/6 " />
                        </div>

                        {/* Hero Text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-2xl md:text-5xl font-semibold mb-4 text text-neutralDGrey  leading-snug'>Learn and Earn <span className="text-brandPrimary leading-snug">in 4 months</span> </h1>
                            <p className="text-neutralGrey text-base mb-8"> Where to grow your business as a photographer: site or social media?</p>
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse gap-16 items-center justify-between ">
                         <div className='items-center justify-center'>
                            <img src={HeroImage} alt='' className="w-5/6 " />
                        </div>

                        {/* Hero Text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-2xl md:text-5xl font-semibold mb-4 text text-neutralDGrey  leading-snug'>Lessons and insights <span className="text-brandPrimary leading-snug">from 8 years</span> </h1>
                            <p className="text-neutralGrey text-base mb-8"> Where to grow your business as a photographer: site or social media?</p>
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>
                    </Carousel>

            </div>
        </div>
        
    );
};

export default Home;
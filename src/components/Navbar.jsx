import React, { useEffect, useState } from 'react';
import logo from '../assets/icon.png';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isStickey, setIsSticky] = useState(false);
    
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }
    
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })


    //navigation array
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About", path: "about"},
        {link: "Products", path: "products"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "faq"}
    ];
    
    return (
        <header className='w-full  bg-white md:bg-transparent  fixed top-0 left-0 '>
            <nav className={`py-4 lg:px-14 px-4 ${ isStickey ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""} `}>
                <div className='flex justify-between items-center text-base gap-8 '>
                    <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]'>NEXCENTS</span></a>
                    {/* nav items */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link, path}) => <Link to={path} spy={true} smooth='true' offset={-100} key={path} className='block text-base text-grey900 hover:text-brandPrimary first:font-midium' > {link}</Link> )
                        }
                        
                    </ul>

                        {/*  btn for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href='/login' className='hidden lg:flex items-center text-brandPrimary hover:text-grey900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
                    </div>

                    {/* btn for mobile devices*/}
                    <div className='md:hidden h-6 w-6'>
                        <button 
                        onClick={toggleMenu}
                        className='focus:outline-none text-neutralDGrey focus:text-grey900'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 ' />) : (<FaBars className='h-6 w-6 ' />)
                            }
                        </button>
                    </div>
                </div>


                {/* navBar Items*/}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary rounded ${isMenuOpen ? "fixed block top-0 right-0 left-0" : "hidden"}`} >
                        {
                            navItems.map(({link, path}) => <Link to={path} spy={true} smooth='true' offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-midium' > {link}</Link> )
                        }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
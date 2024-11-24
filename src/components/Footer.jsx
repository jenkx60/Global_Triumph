import React from 'react';
import footerbg from '../assets/brick 6.png';
import logo from '../assets/logo 1.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='relative w-full h-auto pb-5'>
            <img 
                src={footerbg} 
                alt='Footer BG' 
                className='absolute inset-0 w-full h-full object-cover ' 
            />

            <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center pt-12 pl-28 gap-6'>
                <div className='text-white text-left text-lg font-bold font-poppins'>
                    <h2 className='text-xl font-bold'>Company</h2>
                    <div className='font-thin text-base'>About</div>
                    <div className='font-thin text-base'>Our People</div>
                    <div className='font-thin text-base'>Services</div>
                    <div className='font-thin text-base'>Projects</div>
                    <div className='font-thin text-base'>Gallery</div>
                    <div className='font-thin text-base'>Career</div>
                </div>
                
                <div className='text-white text-left text-lg font-bold font-poppins'>
                    <h2 className='text-xl font-bold'>Investments & Travels</h2>
                    <div className='font-thin text-base'>Investment Packages</div>
                    <div className='font-thin text-base'>Our Estate</div>
                    <div className='font-thin text-base'>Visa Processing</div>
                    <div className='font-thin text-base'>Get Started</div>
                </div>

                <div className='text-white text-left text-lg font-bold font-poppins'>
                    <h2 className='text-xl font-bold'>Explore</h2>
                    <div className='font-thin text-base'>Industry News</div>
                    <div className='font-thin text-base'>Investment Update</div>
                    <div className='font-thin text-base'>Learn</div>
                    <div className='font-thin text-base'>FAQs</div>
                    <div className='font-thin text-base'>Product Update</div>
                </div>

                <div className='text-white text-left text-xl font-bold font-poppins'>
                    <h2 className='text-xl font-bold'>Legal & Help</h2>
                    <div className='font-thin text-base'>Privacy Policy</div>
                    <div className='font-thin text-base'>Terms & Conditions</div>
                    <div className='font-thin text-base'>Investment Terms</div>
                    <div className='font-thin text-base'>Help Center</div>
                    <div className='font-thin text-base'>Contacts Us</div>
                </div>
            </div>


            <hr className='border-t border-gray-400 my-4 relative z-10 w-11/12 ml-16'/>

            <div className='relative z-10 flex flex-col items-center justify-center py-4'>
                <Link to='/' className='mb-2 pb-7'>
                    <img 
                        alt='Global Estate Logo'
                        src={logo}
                        className='h-32 w-auto'
                    />
                </Link>

                <h1 className='text-white font-lato text-2xl leading-7 tracking-widest mb-7'>G L O B A L <span className='mr-5'></span>  T R I U M P H</h1>
                
                <p className='text-white font-lato font-light text-lg sm:text-xl leading-6 tracking-widest mb-7'>Copyright &copy; 2023. Global Triumph. All rights reserved.</p>

                <div className='flex gap-4 mt-2'>
                    <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                        <div className='bg-gray-500 rounded-full p-5'>
                            <FaInstagram className='text-white text-3xl' />
                        </div>
                    </a>

                    <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                        <div className='bg-gray-500 rounded-full p-5'>
                            <FaTwitter className='text-white text-3xl bg-gray-500' />
                        </div>
                    </a>

                    <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
                        <div className='bg-gray-500 rounded-full p-5'>
                            <FaLinkedin className='text-white text-3xl bg-gray-500' />
                        </div>                    
                    </a>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Footer
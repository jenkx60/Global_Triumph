import React from 'react';
import group from '../assets/Group 31.png';

const ContactTab = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 border-t-4 shadow-2xl pt-10 pb-5 gap-5'>
            <div className='grid place-items-center font-raleway px-4'>
                <h1 className='font-semibold text-xl md:text-2xl md:-mb-20'>Instant Support when you need us</h1>
                <p className='font-thin text-base md:text-sm text-center md:text-left md:-mb-20'>We understand how important prompt response to your <br /> inquires means to you. The support team is here for You! </p>
                {/* <p className='font-thin -mt-6 sm:text'>inquires means to you. The support team is here for You!</p> */}

                <button className='border-2 border-green-500 py-4 px-9 rounded-2xl font-thin mt-4'>Contact Us</button>
            </div>

            <div className='grid place-items-center gap-5'>
                <img src={group} alt="group" className='w-full h-auto max-w-xs md:max-w-xs'/>
            </div>
        </div>
    </div>
  )
}

export default ContactTab
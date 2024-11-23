import React from 'react';
import background from '../assets/brick 6.png';
import arrow from '../assets/send-message 2.png';
import ContactTab from './ContactTab';

const OurEstate = () => {
  return (
    <div className=''>
        <div>
          <div className='bg-green-300 flex justify-center p-16 w-full h-40'>
            <h1 className='font-bold text-3xl sm:text-xl md:text-2xl lg:text-3xl leading-10 font-raleway'>Our Projects</h1>
          </div>
        </div>  

        <div className='w-full h-auto relative opacity-90'>
            <img src={background} alt="Estate Background" className='object-cover w-full h-auto' />

            {/* Project 1 */}
            <div className='absolute top-16 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 inline-flex text-gray-400 font-raleway flex-col items-start'>
                <img src={arrow} alt="Direction" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />

                <h1 className='ml-2 sm:ml-4 mt-3 text-white text-lg sm:text-xl md:text-2xl'>PALACE VIEW ESTATE PHASE</h1>  
            </div>

            <div className='absolute top-36 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 font-raleway leading-6 text-white opacity-80'>
                <p className='mb-5'>This project is obtainable for investors to invest fo a mind-blowing Return on Investment, (ROI), in no distant time.</p>
                <p>This project is located at Monastery Road behind Novare Lekki Shoprite, Lekki Epe Expressway, Sangotedo, Lagos State. It sits on four hundred (400) acres <br /> of land, which all together, amount to four hundred (400) plots of land.</p>
            </div>
            

            {/* Project 2 */}
            <div className='absolute top-72 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 inline-flex text-gray-400 font-raleway flex-col items-start'>
                <img src={arrow} alt="Direction" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />

                <h1 className='ml-2 sm:ml-4 mt-3 text-white text-lg sm:text-xl md:text-2xl'>PALACE ROYAL PHASE</h1>  
            </div>

            <div className='absolute top-96 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 font-raleway leading-6 text-white opacity-80'>
                <p className='mb-5'>Located at Oke Ogun Town, (Ibeju Lekki) Lagos State.</p>
                <p>This happens to be one of the most beautiful investments to consider because the property already has the survey and layout completed and the C of O <br /> available, plus it has wonderful Landmarks which include: the Proposed Airport, Palm Afica University, Dangote Sea Port, Alaro City, Eleganza Warehouse, <br /> Itinu etc. The project is on 30 Acres of Land which equate to 180 plots.</p>
            </div>

            {/* Project 3 */}
            <div className='absolute bottom-40 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 inline-flex text-gray-400 font-raleway flex-col items-start'>
                <img src={arrow} alt="Direction" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />

                <h1 className='ml-2 sm:ml-4 mt-3 text-white text-lg sm:text-xl md:text-2xl'>PEACE VIEW ESTATE</h1>  
            </div>

            <div className='absolute bottom-0 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 font-raleway leading-6 text-white opacity-80'>
                <p className='mb-5'>This project also is juicy for investors as it presents great Return on Investment (ROI) opportunity, in no distant time.</p>

                <p>The project sits on 30 Acres of land which amounts to 180 plots. Here is a quick listing of the project and bried summary of th components for your <br /> digestion and decision. This property is locted in Ibeju Lekki. By Elerangbe Community with attractive landmarks like: the proposed International Airport, <br /> Palm Africa University, Dangote Sea Port which is few minutes' drive to Badore Town.</p>
            </div>
        </div>

        <div className='w-full h-auto relative opacity-90'>
            <img src={background} alt='Estate Background' className='object-cover w-full h-auto' />

            {/* Project 4 */}
            <div className='absolute top-16 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 inline-flex text-gray-400 font-raleway flex-col items-start'>
                <img src={arrow} alt="Direction" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />

                <h1 className='ml-2 sm:ml-4 mt-3 text-white text-lg sm:text-xl md:text-2xl'>DIVINE HOME ESTATE PHASE</h1>
            </div>

            <div className='absolute top-40 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 font-raleway leading-6 text-white opacity-80'>
                <p className='mb-5'>Located at Ketu Village, Epe Local Government Area, Lagos State</p>

                <p>The property is 100% dry land, has good road network, excellent drainage, 24 hrs security, 24 hrs power supply, and it is located in a developed <br /> environment.</p>
            </div>

            {/* Project 5 */}
            <div className='absolute bottom-96 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 inline-flex text-gray-400 font-raleway flex-col items-start'>
                <img src={arrow} alt='Direction' className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />

                <h1 className='ml-2 sm:ml-4 mt-3 text-white text-lg sm:text-xl md:text-2xl'>ZION CITY ESTATE PHASE</h1>
            </div>

            <div className='absolute bottom-64 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 font-raleway leading-6 text-white opacity-80'>
                <p className='mb-5'>This property is located in Ketu, Epe Local Government area of Lagos State.</p>

                <p>The estate is beautiful luxury designed to accommodate those who appreciate the taste of excellence and exclusivity, and property is with verifiable <br /> titles and excellent landscape that are 100% dry. The property also has a freehold title.</p>
            </div>

            {/* Project 6 */}
            <div className='absolute bottom-36 left-4 right-4 sm:left-8 sm:right-8 md:left-16 lg:left-36 inline-flex text-gray-400 font-raleway flex-col items-start'>
                <img src={arrow} alt="Direction" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />

                <h1 className='ml-2 sm:ml-4 mt-3 text-white text-lg sm:text-xl md:text-2xl'>FLOURISH HOME ESTATE PHASE</h1>  
            </div>

            <div className='absolute bottom-16 left-4 right-4 sm:left-8 md:left-16 lg:left-36 font-raleway leading-6 text-white opacity-80'>
                <p>1: Located at Tokin Village, Epe Local Government Area, Lagos. The property has Gazette title.</p>
            </div>
        </div>

        <div>
            <ContactTab />
        </div>
    </div>
    

  )
}

export default OurEstate
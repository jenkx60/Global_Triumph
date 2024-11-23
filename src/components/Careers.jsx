import React from 'react'
import Accordion from './Accordion'
import ContactTab from './ContactTab'

const Careers = () => {
  return (
    <div>
        <div>
          <div className='bg-green-300 flex justify-center p-16 w-full h-40 mb-52 '>
            <h1 className='font-bold text-3xl leading-10 font-raleway'>Careers</h1>
          </div>
        </div>  

        <div>
            <div className='container border-2 border-gray-400 border-solid h-auto w-auto rounded-2xl mb-48 shadow-xl px-1'>
                <div>
                    <Accordion />
                </div>
            </div>

            <div>
              <ContactTab />
            </div>
        </div>
    </div>
  )
}

export default Careers
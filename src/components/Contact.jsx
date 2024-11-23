import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import { useNavigate } from 'react-router';

const Contact = () => {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ talk, setTalkToUs ] = useState('');
  const navigate = useNavigate();


  let handleSubmit = (e) => {
    e.preventDefault()

    const user = {firstname, lastname, email, country, talk}

    const infoUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })

        if(!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        navigate('/')

      } catch(error){
        console.log(error)
      }
    }
    infoUsers()
  }


  return (
    <div>
        <div className='flex flex-col items-center'>
          <div className='bg-green-300 flex justify-center p-16 w-full h-40'>
            <h1 className='font-bold text-3xl sm:text-xl md:text-2xl lg:text-3xl leading-10 font-raleway'>Contact Us</h1>
          </div>
        </div>  

          <div>
            <div className='container flex flex-col items-center bg-white w-full h-auto pt-20 pb-7'>
                <p className='font-bold text-lg text-green-700 font-raleway text-center mb-5'>For Business & Partnership Inquires, Kindly Fill the Form Below to Reach Out to Us</p>
            </div>

            <div className='container border-2 border-gray-400 border-solid h-auto w-full max-w-4xl rounded-2xl mb-10 shadow-xl'>
                <form onSubmit={handleSubmit} className='max-w-full sm:mt-20 p-5'>
                  <div className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                    <div>
                      <label className='block font-bold text-sm text-green-700 font-raleway'>
                        First Name</label>
                      <div className='mt-2.5'>
                        <input 
                        required
                        type='text'
                        name='firstname'
                        placeholder='Enter First Name'
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm' 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className= 'block font-bold text-sm text-green-700 font-raleway'>
                        Last Name</label>
                      <div className='mt-2.5'>
                        <input 
                        required
                        type='text'
                        name='lastname'
                        placeholder='Enter Last Name'
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm'
                        /> 
                      </div>
                    </div>
                    
                    <div>
                      <label className='block font-bold text-sm text-green-700 font-raleway'>
                        Email</label>
                      <div className='mt-2.5'>
                        <input 
                          required
                          type='email'
                          name='email'
                          placeholder='Enter email address'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm'
                          />
                      </div>
                    </div>

                    <div>
                      <label className='block font-bold text-sm text-green-700 font-raleway'>
                        Country</label>
                      <div className='mt-2.5'>
                        <select
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm'
                        >
                          <option value=''>Choose your country</option>
                          <option value='Ghana'>Ghana</option>
                          <option value='Niger'>Niger</option>
                          <option value='Nigeria'>Nigeria</option>
                          <option value='South Africa'>South Africa</option>
                          <option value='Kenya'>Kenya</option>
                          <option value='Tanzania'>Tanzania</option>
                          <option value='Uganda'>Uganda</option>
                          <option value='Ethiopia'>Ethiopia</option>
                          <option value='Mauritius'>Mauritius</option>
                          <option value='Morocco'>Morocco</option>
                          <option value='Egypt'>Egypt</option>
                          <option value='Algeria'>Algeria</option>
                          <option value='Tunisia'>Tunisia</option>
                          <option value='Libya'>Libya</option>
                          <option value='United Arab Emirates'>United Arab Emirates</option>
                          <option value='Sao Tome and Principe'>Sao Tome and Principe</option>
                          <option value='Cape Verde'>Cape Verde</option>
                          <option value='Djibouti'>Djibouti</option>
                          <option value='United Kingdom'>United Kingdom</option>
                          <option value='United States of America'>United States of America</option>
                        </select>
                      </div>
                    </div>

                    <div className='sm:col-span-2'>
                      <label className='block font-bold text-sm text-green-700 font-raleway'>
                        Talk To Us</label>
                        <div className='mt-2.5'>
                          <textarea 
                          required
                          type='message'
                          name='message'
                          placeholder='Type what you will like to tell us'
                          rows={6}
                          value={talk}
                          defaultValue={''}
                          onChange={(e) => setTalkToUs(e.target.value)}
                          className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm'
                          />
                        </div>
                    </div>

                    <div className='mt-10 mb-8 sm:col-span-2 flex justify-center'>
                      <button 
                        type='submit'
                        className='bg-green-400 block w-full sm:w-1/4 rounded-md px-3 py-2 text-center text-lg font-light text-black shadow-lg hover:bg-green-500'
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
            </div>

            <div>
              <div className='container mt-10 mb-10 sm:col-span-2 border-2 border-gray-400 border-solid h-auto w-full max-w-4xl rounded-2xl shadow-xl'>
                <div className='grid place-items-center mt-10 mb-8 gap-5 font-raleway'>
                  <p>example@mail.com</p>
                  <p>+234 000 000 0000</p>
                  <div className='text-center'>
                    <p>26, Omolara Olusi Street, Hopeville Estate, Opposite SBI Hotel,</p>
                    <p>Sangotedo Road, Ajah, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Contact
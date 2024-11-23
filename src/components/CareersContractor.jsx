import React, { useState } from 'react';
import ContactTab from './ContactTab';
import { useNavigate } from 'react-router';

const CareersContractor = () => {
    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ years, setYears ] = useState('');
    const [ resume, setResume ] = useState(null);
    const [ portfolio, setPortfolio ] = useState('')
    const [ coverletter, setCoverLetter ] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        const prospect = { firstname, lastname, email, country, phone, years, resume, portfolio, coverletter }

        const prospectData = async () => {
            try {
                const response = await fetch('http://localhost:8001/prospect', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }, 
                    body: JSON.stringify(prospect)
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
        prospectData()
    }
  return (
    <div className='flex flex-col items-center'>
        <div className='bg-green-300 flex flex-col justify-center p-16 sm:p-8 w-full h-40'>
            <h1 className='text-center font-bold text-2xl sm:text-3xl leading-10 font-raleway'>Careers</h1>
            <p className='flex justify-center font-light text-lg leading-10 font-raleway'>Senior Real Estate Contractor</p>
        </div>


        <div>
            <div className='container flex flex-col justify-center bg-white w-full h-auto pt-16 pb-7'>
                <p className='font-bold text-lg text-green-700 text-center font-raleway'>Fill in your details to apply for this position</p>
            </div>

            <div className='container border-2 border-gray-400 border-solid h-auto w-full max-w-4xl rounded-2xl mb-28 shadow-xl'>
                <form onSubmit={handleSubmit} className='max-w-full mt-10'>
                    <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2'>
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

                        <div className='sm:col-span-1'>
                            <label className='block font-bold text-sm text-green-700 font-raleway'>
                            Phone Number</label>
                            <div className='relative mt-2.5'>
                                <div className='absolute inset-y-0 left-o flex items-center'>
                                    <label className='sr-only'>
                                        Country Code
                                    </label>
                                        <select
                                            name='countrycode'
                                            className='h-full rounded-xl border-0 bg-gray-300 bg-none py-0 pl-4 pr-9 text-grey-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm'
                                            >
                                            <option>+234</option>
                                            <option>+233</option>
                                            <option>+237</option>
                                            <option>+254</option>
                                            <option>+255</option>
                                            <option>+256</option>
                                            <option>+1</option>
                                        </select>
                                    </div>
                                        <input 
                                            name='phonenumber'
                                            type='tel'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            autoComplete='tel'
                                            className='block w-full rounded-xl border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm/6'
                                        />
                            </div>
                        </div>

                        <div>
                            <label className='block font-bold text-sm text-green-700 font-raleway'>
                            Years Of Experience</label>
                            <div className='mt-2.5'>
                                <select
                                    required
                                    value={years}
                                    onChange={(e) => setYears(e.target.value)}
                                    className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm/6'
                                    >
                                    <option value=''>Choose your years of experience</option>
                                    <option value='0 - 2'>0 - 2</option>
                                    <option value='3 - 5'>3 - 5</option>
                                    <option value='6 - 8'>6 - 8</option>
                                    <option value='9+'>9+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className='block font-bold text-sm text-green-700 font-raleway'>
                                Upload Resume
                            </label>
                            <div className='mt-2.5'>
                                <input 
                                
                                type='file'
                                name='file'
                                placeholder='No file selected'
                                // value={resume}
                                onChange={handleFileChange} 
                                className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm/6'/>
                            </div>
                        </div>

                        <div>
                            <label className='block font-bold text-sm text-green-700 font-raleway'>
                                Portfolio Link</label>
                            <div className='mt-2.5'>
                                <input 
                                required
                                type='url'
                                name='url'
                                placeholder='Paste your portfolio link'
                                value={portfolio}
                                onChange={(e) => setPortfolio(e.target.value)}
                                className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm/6'/>
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <label className='block font-bold text-sm text-green-700 font-raleway'>
                            Cover Letter</label>
                            <div className='mt-2.5'>
                            <textarea 
                          
                                type='message'
                                name='message'
                                placeholder='Type or paste your cover letter here'
                                rows={6}
                                value={coverletter}
                                defaultValue={''}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                className='block w-full rounded-xl border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:font-raleway placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm/6'
                            />
                        </div>
                        </div>

                        <div className='mt-10 mb-8 sm:col-span-2 flex justify-center'>
                            <button 
                                type='submit'
                                className='bg-green-400 block w-1/2 sm:w-1/4 rounded-md px-3 py-2 text-center text-lg font-light text-black shadow-lg hover:bg-green-400'
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <ContactTab />
    </div>
  )
}

export default CareersContractor;
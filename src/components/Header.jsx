
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { FaGooglePlay, FaApple, FaAngleDown, FaCircleUser, FaPhone, FaHouse, FaArchway, FaCircleExclamation } from 'react-icons/fa6';
import estatelogo from '../assets/WhatsApp Image 2023-04-06 at 13.21 2.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navLinks = [
  { name: 'Contact', path: '/contact' },
  { name: 'CareersContractor', path: '/careerscontractor'},
  // { name: 'About', path: '/about' },
  // { name: 'Project', path: '/projects' },
  { name: 'OurEstate', path: '/ourestate' },
  // { name: 'Investments', path: '/insestments' },
  { name: 'Careers', path: '/careers' },
  { name: 'Resources', path: '/resources' },
];

const resources = [
  { name: 'Contact', path: '/contact', icon: <FaPhone />},
  { name: 'Careers', path: '/careers', icon: <FaCircleUser /> },
  { name: 'Our Estate', path: '/ourestate', icon: <FaHouse /> },
  { name: 'Properties', path: '/properties', icon: <FaArchway /> },
  { name: 'Privacy Policy', path: '/privacy', icon: <FaCircleExclamation /> },
]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]


  return (
    <header className='bg-white'>
      <nav className='mx-auto flex items-center justify-between p-6 lg:px-8'>
        {/* Logo */}
        <Link to='/' className='flex lg:flex-1'>
          <img 
          alt='Global Estate Logo'
          src={estatelogo}
          className='h-14 w-auto'
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className='flex lg:hidden'>
          <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='text-gray-700'>
            {mobileMenuOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3Icon className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex lg:gap-x-12'>
          {navLinks.map((link) => (
            <Link
            key={link.name}
            to={link.path}
            className='text-sm font-semibold text-green-700 hover:text-green-500'>
              {link.name}
            </Link>
          ))}
          {/* <a className='relative'>
            <FaAngleDown className='absolute right-7 top-1 text-green-700' />
          </a> */}
        </div>

        {/* Desktop App Links */}
        <div className='hidden lg:flex lg:gap-6'>
            <Link to='/login' className='text-sm font-semibold text-green-700'>Login</Link>
            <Link to='/signup' className='bg-green-700 px-4 py-2 text-sm text-white rounded-lg hover:bg-green-500'>Sign Up</Link>
            <div className='flex gap-3'>
              <a href="#" className='text-green-700'><FaApple /></a>
              <a href='#' className='text-green-700'><FaGooglePlay /></a>
            </div>
        </div>
        {/* <div className='lg:flex-1 lg:justify-end items-end space-x-72'>
         <div className='m-auto relative bg-black w-40 inline-flex ml-7'>
            <div className='absolute top-0'>
              <Link 
                to='/login'
                className='mr-6 text-sm font-semibold text-green-700'>
                  Login
              </Link>
            </div>

            <div className='absolute right-0'>
              <Link 
                to='/signup'
                className='bg-green-700 px-6 py-2 text-sm text-white rounded-lg hover:bg-green-500'>
                  Sign Up
              </Link>
            </div>
          </div>

          <div className='flex gap-3 w-24 h-10 border-2 border-green-300 rounded-lg p-1 -mt-3 relative'>
            <a href='#' className='text-green-700'>
              <FaApple className='size-7' />
            </a>

            <a href='#' className='text-green-700'>
              <FaGooglePlay className='size-7' />
            </a>
          </div>
        </div> */}


        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden bg-white shadow-lg'>
            <div className='flex flex-col p-4'>
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className='text-base font-semibold text-green-700 hover:bg-gray-50 p-2 rounded'
                  onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}

              <Link 
                to='/login'
                className='text-base font-semibold text-green-700 hover:bg-gray-50 p-2 rounded'
                onClick={() => setMobileMenuOpen(false)}>
                  Login
              </Link>

              <Link 
                to='/signup'
                className='bg-green-700 text-white p-2 rounded-lg hover:bg-green-500 text-center'
                onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
              </Link>

              <div className='flex gap-3'>
                <a href='#' className='text-green-700'>
                  <FaApple />
                </a>

                <a href='#' className='text-green-700'>
                  <FaGooglePlay />
                </a>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  )
}




    // <header className="bg-white">
    //   <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    //     <div className="flex lg:flex-1">
    //       <a href="#" className="-m-1.5 p-1.5">
    //         <img
    //           alt="Global Estate Logo"
    //           src={estatelogo}
    //           className="h-14 w-auto"
    //         />
    //       </a>
    //     </div>
    //     <div className="flex lg:hidden">
    //       <button
    //         type="button"
    //         onClick={() => setMobileMenuOpen(true)}
    //         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <Bars3Icon aria-hidden="true" className="h-6 w-6" />
    //       </button>
    //     </div>
    //     <PopoverGroup className="hidden lg:flex lg:gap-x-12 mr-11">

    //       <a href="#" className="text-sm/6 font-semibold text-green-700">
    //         About
    //       </a>
    //       <a href="#" className="text-sm/6 font-semibold text-green-700">
    //         Projects
    //       </a>
    //       <a href="#" className="text-sm/6 font-semibold text-green-700">
    //         Investments
    //       </a>

    //       <Popover className="relative">
    //         <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-green-700">
    //           Resources
    //           <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
    //         </PopoverButton>

    //         <PopoverPanel
    //           transition
    //           className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
    //         >
    //           <div className="p-4">
    //             {resources.map((item) => (
    //               <div
    //                 key={item.name}
    //                 className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
    //               >
    //                 <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
    //                   <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
    //                 </div>
    //                 <div className="flex-auto">
    //                   <a href={item.href} className="block font-semibold text-gray-900">
    //                     {item.name}
    //                     <span className="absolute inset-0" />
    //                   </a>
    //                   <p className="mt-1 text-gray-600">{item.description}</p>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </PopoverPanel>
    //       </Popover>

    //     </PopoverGroup>
    //     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //       <a href="#" className="mr-6 mt-1.5 text-sm/6 font-semibold text-green-700">
    //         Login 
    //       </a>

    //         <a>
    //             <button className='bg-green-700  px-6 py-1 text-base/7 text-white rounded-lg hover:bg-green-500'>
    //                 Sign Up
    //             </button>
    //         </a>

    //         <div className='ml-8 flex gap-3 w-24 h-10 pb-1 pl-3 border-2 border-green-300 rounded-lg'>
    //             <a href='#'>
    //                 <FaApple className='size-7 text-green-700'/>
    //             </a>
    //             <a href='#' >
    //                 <FaGooglePlay className='size-7 pt-1 text-green-700'/>
    //             </a>
    //         </div>


    //     </div>
    //   </nav>
    //   <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
    //     <div className="fixed inset-0 z-10" />
    //     <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //       <div className="flex items-center justify-between">
    //         <a href="#" className="-m-1.5 p-1.5">
    //           <img
    //             alt="Global Estate"
    //             src={estatelogo}
    //             className="h-8 w-auto"
    //           />
    //         </a>
    //         <button
    //           type="button"
    //           onClick={() => setMobileMenuOpen(false)}
    //           className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //         >
    //           <span className="sr-only">Close menu</span>
    //           <XMarkIcon aria-hidden="true" className="h-6 w-6" />
    //         </button>
    //       </div>
    //       <div className="mt-6 flow-root">
    //         <div className="-my-6 divide-y divide-gray-500/10">
    //           <div className="space-y-2 py-6">
    //             <a
    //               href="#"
    //               className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-green-700 hover:bg-gray-50"
    //             >
    //               About
    //             </a>
    //             <a
    //               href="#"
    //               className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-green-700 hover:bg-gray-50"
    //             >
    //               Projects
    //             </a>
    //             <a
    //               href="#"
    //               className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-green-700 hover:bg-gray-50"
    //             >
    //               Investments
    //             </a>
    //             <Disclosure as="div" className="-mx-3">
    //               <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-green-700 hover:bg-gray-50">
    //                 Resources
    //                 <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
    //               </DisclosureButton>
    //               <DisclosurePanel className="mt-2 space-y-2">
    //                 {[...resources].map((item) => (
    //                   <DisclosureButton
    //                     key={item.name}
    //                     as="a"
    //                     href={item.href}
    //                     className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-green-700 hover:bg-gray-50"
    //                   >
    //                     {item.name}
    //                   </DisclosureButton>
    //                 ))}
    //               </DisclosurePanel>
    //             </Disclosure>

    //           </div>
    //           <div className="py-6">
    //             <a
    //               href="#"
    //               className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-green-700 hover:bg-gray-50"
    //             >
    //               Login
    //             </a>
    //             <a>
    //                 <button className='bg-green-700 -mx-2.5 px-5 py-1.5 text-base/7 text-white rounded-lg hover:bg-green-500'>
    //                     Sign Up
    //                 </button>
    //             </a>
    //           </div>

    //           <div className='  flex gap-3 w-24 h-10 p-1.5  border-green-700-8'>
    //                 <a href='#'>
    //                     <FaApple className='size-7'/>
    //                 </a>
    //                 <a href='#' >
    //                     <FaGooglePlay className='size-7 pt-1'/>
    //                 </a>
    //           </div>
    //         </div>
    //       </div>
    //     </DialogPanel>
    //   </Dialog>
    // </header>




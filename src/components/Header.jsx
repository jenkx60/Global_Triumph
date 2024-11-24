
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
    import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, UsersIcon, HomeIcon, HomeModernIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
    import { FaGooglePlay, FaApple, FaAngleDown, FaCircleUser, FaPhone, FaHouse, FaArchway, FaCircleExclamation } from 'react-icons/fa6';
    import estatelogo from '../assets/WhatsApp Image 2023-04-06 at 13.21 2.png'
    
    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Investments', path: '/investments' },
    ];
    
    const products = [
      { name: 'Contact', path: '/contact', href: '#', icon: PhoneIcon },
      { name: 'Careers', path: '/careers', href: '#', icon: UsersIcon },
      { name: 'Our Estate', path: '/ourestate', href: '#', icon: HomeModernIcon },
      { name: 'Career Contractor', path: '/careerscontractor', href: '#', icon: HomeIcon },
      { name: 'Privacy Policy', href: '#', icon: EyeSlashIcon },
    ]
    const callsToAction = [
      { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
      { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ]
    
    
    export default function Header() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
      return (
        <header className="bg-white">
          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <Link to='/'>
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt="Global Triumph Logo"
                            src={estatelogo}
                            className="h-14 w-auto"
                        />
                    </a>
    
                </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-sm/6 font-semibold text-green-700">
                            {link.name}
                    </Link>
                ))}
            
    
              {/* <a href="#" className="text-sm/6 font-semibold text-green-700">
                About
              </a>
              <a href="#" className="text-sm/6 font-semibold text-green-700">
                Projects
              </a>
              <a href="#" className="text-sm/6 font-semibold text-green-700">
                Investments
              </a> */}
    
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-green-700">
                  Resources
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-green-700" />
                </PopoverButton>
    
                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <Link to={item.path}>
                      <div
                        key={item.name}
                        // to={item.path}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-green-600" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-green-700">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-green-500">{item.description}</p>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
              <Link to='/login'>
                <a href="#" className="text-sm/6 font-semibold text-green-700 py-2">
                  Login
                </a>
              </Link>

              <Link to='/signup'>
                <a href="#" className="text-sm/6 font-semibold text-white bg-green-700 hover:bg-green-400 rounded-lg px-4 py-2">
                  Sign Up
                </a>
              </Link>
              <div className='flex gap-3 border-2 py-2 px-4 rounded-lg border-green-700'>
                <a className='text-green-700'><FaApple /></a>
                <a className='text-green-700'><FaGooglePlay /></a>
              </div>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Global Triumph Logo"
                    src={estatelogo}
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-green-700" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                   <Link to='/about'> 
                        <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-green-700 hover:bg-gray-50"
                            >
                            About
                        </a>
                   </Link> 
    
                   <Link to='/projects'>
                        <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-green-700 hover:bg-gray-50"
                        >
                            Projects
                        </a>
                    </Link>
    
                    <Link to='/investments'>    
                        <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-green-700 hover:bg-gray-50"
                        >
                            Investments
                        </a>
                    </Link>
    
                    <Disclosure as="div" className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-green-700 hover:bg-gray-50">
                        Resources
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180 text-green-700" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-green-700 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  </div>
                  <div className="py-6">
                    <div className='flex gap-4'>
                       <Link to='/login'>
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-green-700 hover:bg-gray-50"
                            >
                                Login
                            </a>
                       </Link> 
    
                       <Link to='signup'>
                            <a href="#" className="text-sm/6 font-semibold text-white bg-green-700 hover:bg-green-400 rounded-lg px-6 py-3">
                                Sign Up
                            </a>
                       </Link> 
                    </div>
                    <div className='flex gap-3 border-2 py-2 px-4 mt-5 rounded-lg border-green-700 w-20'>
                        <a className='text-green-700'><FaApple /></a>
                        <a className='text-green-700'><FaGooglePlay /></a>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      )
    }
    



import React, { useState } from 'react';
import logo from '../assets/iy.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const location = useLocation();
    return (
        <>
            <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="w-36" alt="Flowbite Logo" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="/rsvp" type="button" className="text-white bg-[#723526] hover:bg-[#feebdb] hover:text-[#723526] focus:ring-4 focus:outline-none focus:ring-[#723526] font-medium rounded-lg text-sm px-4 py-2 text-center">
                            RSVP NOW
                        </Link>
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            <li>
                            <a
                              href="#couples"
                              className={`block py-2 px-3 text-gray-900  rounded md:bg-transparent ${
                                  location.hash === '#couples' ? 'md:text-[#723526]' : 'text-gray-900'
                              } md:p-0 `}
                              aria-current="page"
                          >
                              The Couple
                          </a>
                            </li>
                            <li>
                            <a
                              href="#event"
                              className={`block py-2 px-3 text-gray-900  rounded md:bg-transparent ${
                                  location.hash === '#event' ? 'md:text-[#723526]' : 'text-gray-900'
                              } md:p-0 `}
                              aria-current="page"
                          >
                                Events</a>
                            </li>
                            <li>

                            <a
                              href="#love-story"
                              className={`block py-2 px-3 text-gray-900 rounded md:bg-transparent ${
                                  location.hash === '#love-story' ? 'md:text-[#723526]' : 'text-gray-900'
                              } md:p-0 `}
                              aria-current="page"
                          >
                                Love Story</a>
                            </li>
                            <li>
                              
                            <a
                              href="#wish-list"
                              className={`block py-2 px-3 text-gray-900  rounded md:bg-transparent ${
                                  location.hash === '#wish-list' ? 'md:text-[#723526]' : 'text-gray-900'
                              } md:p-0 `}
                              aria-current="page"
                          >
                              Our Wish List</a>
                            </li>
                            <li>
                                
                            <a
                              href="#photos"
                              className={`block py-2 px-3 text-gray-900  rounded md:bg-transparent ${
                                  location.hash === '#photos' ? 'md:text-[#723526]' : 'text-gray-900'
                              } md:p-0 `}
                              aria-current="page"
                          >
                                
                                Photos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;

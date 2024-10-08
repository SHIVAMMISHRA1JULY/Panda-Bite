import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiFoodpanda } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close button

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the dropdown menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu when clicking the hamburger icon
  }

  return (
    <div className='mb-[70px]'>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <SiFoodpanda color='white' size={50} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Panda Bite</span>
          </Link>

          {/* Hamburger Icon for Mobile View */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Change icon based on menu state */}
          </button>

          {/* Menu Items */}
          <div className={`w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={'/'} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to={'About'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              </li>
              <li>
                <Link to={'Services'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

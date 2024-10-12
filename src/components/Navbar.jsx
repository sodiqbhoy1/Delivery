import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu closed by default

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu on button click
  };

  return (
    <div className="relative">
      <nav className="flex items-center justify-between p-4 bg-gray-800 fixed top-0 left-0 right-0 z-50 w-full shadow-md">
        {/* Logo */}
        <div className="text-yellow-500 font-bold text-2xl">Delivery</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="text-white" size="lg" />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-6 bg-gray-800 md:bg-transparent w-full md:w-auto md:static absolute top-16 left-0 transition-all duration-500 ease-in-out z-40`}
        >
          <li className="py-2 px-4 md:py-0">
            <HashLink
              smooth
              to="#home"
              className="text-white hover:text-yellow-500 transition duration-200 block"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </HashLink>
          </li>
          <li className="py-2 px-4 md:py-0">
            <HashLink
              smooth
              to="#about"
              className="text-white hover:text-yellow-500 transition duration-200 block"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </HashLink>
          </li>
          <li className="py-2 px-4 md:py-0">
            <HashLink
              smooth
              to="#services"
              className="text-white hover:text-yellow-500 transition duration-200 block"
              onClick={() => setIsOpen(false)}
            >
              Services
            </HashLink>
          </li>
          <li className="py-2 px-4 md:py-0">
            <HashLink
              smooth
              to="#contact"
              className="text-white hover:text-yellow-500 transition duration-200 block"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </HashLink>
          </li>

          {/* Order Now Button for Mobile inside Menu */}
          <div className="flex justify-center mt-4 md:hidden">
            <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-200">
              Order Now!
            </button>
          </div>
        </ul>

        {/* Order Now Button for Desktop */}
        <div className="hidden md:block">
          <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-200">
            Order Now!
          </button>
        </div>
      </nav>

      {/* Extra Spacing for Small Screens to Avoid Overlap */}
      <div className="mt-20 md:mt-0"></div>
    </div>
  );
};

export default Navbar;

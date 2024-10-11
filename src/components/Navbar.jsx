import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      {/* Logo */}
      <div className="text-yellow-500 font-bold text-2xl">
        Delivery
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="text-white" size="lg" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex md:flex-row md:space-x-6 bg-gray-800 md:bg-transparent w-full md:w-auto absolute md:relative left-0 md:left-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16' : '-top-full'
        } md:top-0 z-10 md:z-auto`}
      >
        <li className="py-2 px-4 md:py-0">
          <a
            href="#home"
            className="text-white hover:text-yellow-500 transition duration-200 block"
          >
            Home
          </a>
        </li>
        <li className="py-2 px-4 md:py-0">
          <a
            href="#about"
            className="text-white hover:text-yellow-500 transition duration-200 block"
          >
            About Us
          </a>
        </li>
        <li className="py-2 px-4 md:py-0">
          <a
            href="#services"
            className="text-white hover:text-yellow-500 transition duration-200 block"
          >
            Services
          </a>
        </li>
        <li className="py-2 px-4 md:py-0">
          <a
            href="#contact"
            className="text-white hover:text-yellow-500 transition duration-200 block"
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Order Now Button */}
      <div className="hidden md:block">
        <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-200">
          Order Now!
        </button>
      </div>
    </nav>

    {/* Order Now Button for Mobile */}
    <div className={`flex justify-center mt-4 md:hidden transition-all ${isOpen ? 'block' : 'hidden'}`}>
      <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-200">
        Order Now!
      </button>
    </div>
  </div>
  )
}

export default Navbar

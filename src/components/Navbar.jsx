import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div
      className="flex w-full h-16 bg-white
     border-b-2 border-gray-300 justify-center items-center"
    >
      <ul className="flex flex-row list-none gap-4 justify-center items-center">
        <li className="border-0 transition-all duration-300 ease-in-out hover:border-2 hover:px-3 hover:py-1 hover:rounded-2xl">
          About Me
        </li>
        <li className="border-0 transition-all duration-300 ease-in-out hover:border-2 hover:px-3 hover:py-1 hover:rounded-2xl">
          Skills
        </li>
        <li className="border-0 transition-all duration-300 ease-in-out hover:border-2 hover:px-3 hover:py-1 hover:rounded-2xl">
          Projects
        </li>
        <li className="border-0 transition-all duration-300 ease-in-out hover:border-2 hover:px-3 hover:py-1 hover:rounded-2xl">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

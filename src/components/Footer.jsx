import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row mx-5 md:mx-10 lg:mx-30 mt-5 mb-10 overflow-hidden "
    >
      <div className="flex-col lg:flex-1/2 justify-center lg:justify-start items-center content-center">
        <div className="flex mb-4 text-4xl justify-center items-center lg:justify-start lg:items-start ">
          Contact Me
        </div>
        <div className="flex mb-4 text-sm text-gray-400 md:justify-center md:items-center lg:justify-start lg:items-start">
          Feel free to drop a message for any inquiries or
          collaborations.
        </div>
      </div>
      <div className="flex-1/2 bg-gray-300 p-8 rounded-2xl">
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-white border-1 rounded-2xl p-3 my-3"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white border-1 rounded-2xl p-3 my-3"
          />
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="bg-white border-1 rounded-2xl p-3 my-3"
          />
          <button className="flex mx-auto w-60 px-3 py-2 rounded-2xl justify-center items-center relative z-10 font-inherit text-white bg-black outline-none border-none overflow-hidden transition-all duration-500 ease-in-out hover:text-gray-800 group">
            <span className="absolute inset-1/2 w-4 h-4 bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-in-out group-hover:scale-[15] z-0"></span>
            <span className="relative z-10">Send Message</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Footer;

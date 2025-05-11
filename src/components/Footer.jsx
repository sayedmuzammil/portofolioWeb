import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-full flex mx-50 mb-5">
      <div className="flex-1/2 justify-start items-center content-center">
        <div className="flex mb-4 text-4xl ">My Core Skills</div>
        <div className="flex text-sm text-gray-400">
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
    </div>
  );
};

export default Footer;

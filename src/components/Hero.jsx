import React from 'react';

function Hero() {
  return (
    <div>
      <div className="flex gap-4  mx-50 mt-5">
        <div className="flex w-50 h-100 border-1 rounded-2xl bg-gray-200 justify-center items-center">
          gambar
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex items-center">
            <div className="flex w-60 px-3 py-2 border-1 border-gray-900 rounded-2xl justify-center items-center">
              welcome to my website
            </div>
          </div>
          <div className="flex flex-col h-full ">
            <div className="mt-5 mb-3 text-5xl font-medium ">
              <div>Hi, I am Sayed!</div>
              <div>Front End Developer</div>
            </div>
            <div className="my-3 text-2xl text-gray-400">
              Living in jakarta
            </div>
            <div className="my-3 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </div>
            <div className="w-full h-0.5 bg-gray-100" />
          </div>

          <div className="flex items-center">
            <button className="flex w-60 px-3 py-2 rounded-2xl justify-center items-center relative z-10 font-inherit text-white bg-black outline-none border-none overflow-hidden transition-all duration-500 ease-in-out hover:text-gray-800 group">
              <span className="absolute inset-1/2 w-4 h-4 bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-in-out group-hover:scale-[15] z-0"></span>
              <span className="relative z-10">Lets Collaborate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

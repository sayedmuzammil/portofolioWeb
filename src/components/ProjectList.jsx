import React from 'react';
import { motion } from 'framer-motion';

const ProjectList = () => {
  return (
    <div className=" mx-50 mt-15 ">
      <div className="flex mb-4 text-4xl justify-center items-center">
        My Project Lists
      </div>
      <div className="flex text-sm text-gray-400 justify-center items-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div>
        <div className="flex flex-row gap-3 my-10 p-10 bg-gray-200 shadow-2xl rounded-2xl">
          <div className="flex flex-col w-[70%] justify-evenly ">
            <p className="flex w-40 mb-3 px-2 py-1 text-xs border-1 border-[#9BA1A5] rounded-2xl justify-center items-center">
              Website / Responsive
            </p>
            <div className="my-3">
              <div className="mb-3 text-2xl">Project 1</div>
              <div className="mb-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua
              </div>
            </div>

            <div className="flex w-30 px-2 py-1 border-1 border-gray-900 rounded-2xl justify-center items-center">
              Visit Project
            </div>
          </div>
          <div className="flex h-60 w-80 bg-gray-50 border-1 rounded-2xl justify-center items-center">
            image
          </div>
        </div>
        <div className="flex flex-row gap-3 my-10 p-10 bg-[#f1f5f0] shadow-2xl rounded-2xl">
          <div className="flex flex-col w-[70%] justify-evenly ">
            <p className="flex w-40 mb-3 px-2 py-1 text-xs border-1 border-gray-900 rounded-2xl justify-center items-start">
              Website
            </p>
            <div className="my-3">
              <div className="mb-3 text-2xl">Project 2</div>
              <div className="mb-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua
              </div>
            </div>

            <div className="flex w-30 px-2 py-1 border-1 border-gray-900 rounded-2xl justify-center items-center">
              Visit Project
            </div>
          </div>
          <div className="flex h-60 w-80 bg-gray-50 border-1 rounded-2xl justify-center items-center">
            image
          </div>
        </div>{' '}
      </div>
    </div>
  );
};

export default ProjectList;

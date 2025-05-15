import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    id: '1',
    type: 'Website / Responsive',
    name: 'Project 1',
    image: 'image1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    link: 'test1',
    backgroundColor: '#f1f5f9',
  },
  {
    id: '2',
    type: 'Website',
    name: 'Project 2',
    image: 'image2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    link: 'test2',
    backgroundColor: '#f1f5f0',
  },
];

const ProjectList = () => {
  return (
    <div className="flex flex-col mx-5 md:mx-10 lg:mx-30 mt-15 overflow-hidden ">
      <div className="flex mb-4 text-4xl justify-center items-center">
        My Project Lists
      </div>
      <div className="flex text-sm text-gray-400 justify-center items-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div>
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row lg:flex-row gap-3 my-10 p-10 shadow-lg rounded-2xl"
            style={{ backgroundColor: project.backgroundColor }}
          >
            <div className="flex flex-col md:max-w-[60%] lg:max-w-[70%] justify-evenly ">
              <p className="flex w-40 mb-3 px-2 py-1 text-xs border-1 border-[#9BA1A5] rounded-2xl justify-center items-center">
                {project.type}
              </p>
              <div className="my-3">
                <div className="mb-3 text-2xl">{project.name}</div>
                <div className="mb-3 text-sm text-gray-600">
                  {project.description}
                </div>
              </div>
              <div className="flex w-30 px-2 py-1 border-1 border-gray-900 rounded-2xl justify-center items-center">
                Visit Project
              </div>
            </div>
            <div className="flex h-30  md:h-40 lg:h-60 max-w-full md:w-70 lg:w-80 bg-gray-50 border-1 rounded-2xl justify-center items-center">
              image
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
  const orbit1 = [
    {
      name: 'HTML',
      image: './assets/html5.png',
    },
    {
      name: 'CSS',
      image: './assets/css3.png',
    },
    {
      name: 'JS',
      image: './assets/js.png',
    },
  ];
  const orbit2 = [
    {
      name: 'React',
      image: './assets/react.png',
    },
    {
      name: 'Redux',
      image: './assets/redux.png',
    },
    {
      name: 'Typescript',
      image: './assets/ts.png',
    },
  ];

  let orbitDuration = 30;

  const skillList = [
    { name: 'HTML', score: '100%' },
    { name: 'Redux', score: '85%' },
    { name: 'Javascript', score: '90%' },
    { name: 'React', score: '90%' },
    { name: 'CSS', score: '80%' },
    { name: 'Typescript', score: '70%' },
  ];

  return (
    <div className="max-w-full mx-5 md:mx-10 lg:mx-30 my-15 overflow-hidden">
      <div className="flex mb-4 text-4xl justify-center items-center">
        My Core Skills
      </div>
      <div className="flex text-sm text-gray-400 justify-center items-center">
        An overview of the key technologies and frameworks I
        specialize in
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row gap-3 lg:gap-10 ">
        <div className=" max-w-full lg:w-[50%] my-3 ">
          <div className="flex my-4 justify-center items-center">
            <motion.div
              className="flex w-[15rem] md:w-[19rem] lg:w-[25rem] h-[15rem] md:h-[19rem] lg:h-[25rem] rounded-full justify-center "
              style={{
                border: '3px dashed rgba(0, 0, 0, 0.5)',
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: orbitDuration,
                ease: 'linear',
              }}
            >
              {orbit2.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="absolute w-12 h-12 rounded-full justify-center"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${
                      (i / orbit2.length) * 360
                    }deg) translate(-50%, -50%) translateX(150px)`,
                    transformOrigin: '0 0',
                  }}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-[3rem] h-auto ml-[-2rem] md:ml-0 lg:ml-12 rotate-90"
                    style={{
                      animation:
                        'rotate-animation 10s infinite linear',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex absolute w-[6.5rem] md:w-[9rem] lg:w-[12rem] h-[6.5rem] md:h-[9rem] lg:h-[12rem] rounded-full justify-center"
              style={{
                border: '3px dashed rgba(0, 0, 0, 0.5)',
              }}
              animate={{ rotate: 360 + 180 }}
              transition={{
                repeat: Infinity,
                duration: orbitDuration,

                ease: 'linear',
              }}
            >
              {orbit1.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="absolute w-12 h-12 rounded-full justify-center"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${
                      (i / orbit1.length) * 360
                    }deg) translate(-50%, -50%) translateX(150px)`,
                    transformOrigin: '0 0',
                  }}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-[3rem] h-auto ml-[-6rem] md:ml-[-5rem] lg:ml-[-3.5rem] rotate-90"
                    style={{
                      animation:
                        'rotate-animation 10s infinite linear',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col my-5 justify-evenly max-w-full lg:w-[45%] h-auto">
          {skillList.map((skill) => (
            <div key={skill.name} className=" my-3">
              <div>
                <div className="flex w-full justify-between gap-3 font-bold">
                  <div>{skill.name}</div>
                  <div>{skill.score}</div>
                </div>
              </div>
              <div className="max-w-full h-5 rounded-full bg-gray-100 overflow-hidden outline-1">
                <div
                  className="animate-progress h-full rounded-full bg-amber-300"
                  style={{
                    '--target-width': skill.score,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

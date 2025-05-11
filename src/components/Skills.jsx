import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
  const orbit1 = [
    {
      name: 'HTML',
      image: './src/assets/html5.png',
    },
    {
      name: 'CSS',
      image: './src/assets/css3.png',
    },
    {
      name: 'JS',
      image: './src/assets/js.png',
    },
  ];
  const orbit2 = [
    {
      name: 'React',
      image: './src/assets/react.png',
    },
    {
      name: 'Redux',
      image: './src/assets/redux.png',
    },
    {
      name: 'Typescript',
      image: './src/assets/ts.png',
    },
  ];

  let orbitDuration = 30;

  return (
    <div className=" mx-50 my-15 ">
      <div className="flex mb-4 text-4xl justify-center items-center">
        My Core Skills
      </div>
      <div className="flex text-sm text-gray-400 justify-center items-center">
        An overview of the key technologies and frameworks I
        specialize in
      </div>
      <div className="flex gap-3">
        <div className=" w-[50%] my-3 ">
          <div className="flex my-4 justify-center items-center">
            <motion.div
              className="flex w-[400px] h-[400px] rounded-full justify-center "
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
              {/* test 1
              <img
                src="./src/assets/react.png"
                className="w-[50px] h-[50px] mt-[-30px]"
              /> 
              */}

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
                    className="w-[50px] h-[50px] ml-12 rotate-90"
                    style={{
                      animation:
                        'rotate-animation 10s infinite linear',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex absolute w-[250px] h-[250px] rounded-full justify-center"
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
                    className="w-[50px] h-[50px] ml-[-30px] rotate-90"
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
        <div className="flex flex-col my-5 justify-evenly  w-[50%] h-[400px]">
          <div className="my-3">
            <div>
              <div className="flex w-fulljustify-between gap-3 font-bold">
                <div>HTML</div>
                <div>100%</div>
              </div>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-100 overflow-hidden outline-1">
              <div className="animate-progress w-[100%] h-full rounded-full bg-amber-300"></div>
            </div>
          </div>
          <div className="my-3">
            <div>
              <div className="flex w-full justify-between gap-3 font-bold">
                <div>Redux</div>
                <div>85%</div>
              </div>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-100 overflow-hidden outline-1">
              <div className="animate-progress w-[85%] h-full rounded-full bg-amber-300"></div>
            </div>
          </div>
          <div className="my-3">
            <div className="flex w-full justify-between gap-3 font-bold">
              <span>JavaScript</span>
              <span>90%</span>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-100 overflow-hidden outline-1">
              <div className="animate-progress w-[90%] h-full rounded-full bg-amber-300"></div>
            </div>
          </div>
          <div className="my-3">
            <div>
              <div className="flex w-full justify-between gap-3 font-bold">
                <div>React</div>
                <div>90%</div>
              </div>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-100 overflow-hidden outline-1">
              <div className="animate-progress w-[90%] h-full rounded-full bg-amber-300"></div>
            </div>
          </div>
          <div className="my-3">
            <div>
              <div className="flex w-full justify-between gap-3 font-bold">
                <div>CSS</div>
                <div>80%</div>
              </div>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-100 overflow-hidden outline-1">
              <div className="animate-progress w-[80%] h-full rounded-full bg-amber-300"></div>
            </div>
          </div>
          <div className="my-3">
            <div>
              <div className="flex w-full justify-between gap-3 font-bold">
                <div>Typescript</div>
                <div>70%</div>
              </div>
            </div>
            <div className="w-full h-5 rounded-full bg-gray-100 overflow-hidden outline-1">
              <div className="animate-progress w-[70%] h-full rounded-full bg-amber-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

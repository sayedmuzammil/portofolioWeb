import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Test2 = () => {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-4">My Project Lists</div>
      <div className="mb-4 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div
        id="cards"
        className="flex flex-wrap justify-center items-center gap-4"
      >
        {cards.map((card, index) => (
          <Card key={index} text={card} index={index} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ text, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start({ scale: 1.1 });
  } else {
    controls.start({ scale: 1 });
  }

  return (
    <motion.div
      ref={ref}
      className={`card w-40 h-60 text-white flex justify-center items-center rounded-lg shadow-lg bg-blue-${
        500 + index * 100
      }`}
      initial={{ scale: 1 }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="card__content">{text}</div>
    </motion.div>
  );
};

export default Test2;

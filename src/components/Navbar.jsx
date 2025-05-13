import React from 'react';

const Navbar = () => {
  const menuNavbar = [
    {
      name: 'About Me',
    },
    {
      name: 'Skils',
    },
    {
      name: 'Projects',
    },
    {
      name: 'Contact',
    },
  ];

  return (
    <div
      className="flex-no-wrap fixed top-0 z-10 flex w-full h-16 bg-white
     border-b-2 border-gray-300  justify-center items-center "
    >
      <ul className="flex flex-row list-none gap-4 justify-center items-center">
        {menuNavbar.map((item) => (
          <li
            key={item.name}
            className="border-0 transition-all duration-300 ease-in-out hover:border-2 hover:px-3 hover:py-1 hover:rounded-2xl"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

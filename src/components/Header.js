import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';

function Header() {
  const [showMenu, setShowMenu] = useState('md:hidden');
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = [
    {
      title: 'Home',
      key: '/',
    },
    {
      title: 'Projects',
      key: '/projects',
    },
    {
      title: 'Contact',
      key: '/contact',
    },
  ];

  const pathName = window.location.pathname;

  return (
    <div className='text-white font-mont fixed inset-0 z-50'>
      <div
        className={`flex  justify-between items-center p-2 shadow-lg bg-theme ${
          showMenu !== 'md:hidden' && 'md:flex-col'
        }`}
      >
        <div className='flex justify-between w-full items-center'>
          <h1 className='text-xl font-semibold'>A B H</h1>

          {!toggleMenu ? (
            <FaBars
              className='lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer'
              onClick={() => {
                setToggleMenu(true);
                showMenu === 'md:hidden'
                  ? setShowMenu('')
                  : setShowMenu('md:hidden');
              }}
            />
          ) : (
            <GiCrossMark
              className='lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer'
              onClick={() => {
                setToggleMenu(false);
                showMenu === 'md:hidden'
                  ? setShowMenu('')
                  : setShowMenu('md:hidden');
              }}
            />
          )}
        </div>
        <div className='flex md:hidden'>
          {menuItems.map((item, k) => {
            return (
              <li
                className={`list-none mx-5 p-1  ${
                  item.key === pathName && 'bg-white text-black rounded-md'
                }`}
                key={k}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        <div
          className={` mt-5 md:flex items-start justify-start w-full lg:hidden xl:hidden 2xl:hidden flex-col ${showMenu}`}
        >
          {menuItems.map((item, k) => {
            return (
              <li
                className={`list-none my-2 p-2  ${
                  item.key === pathName && 'bg-white text-black rounded-md px-5'
                }`}
                key={k}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;

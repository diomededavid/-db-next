'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

interface NavMenuProps {
  /**
   * Proop
   */
  prop?: string;
}

// @ts-ignore
export const useToggle = (initialState) => {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };
  return [toggleValue, toggler];
};

export const NavMenu = ({}: NavMenuProps) => {
  const [toggle, setToggle] = useToggle(false);
  const navToggle = toggle ? `h-screen` : `h-[0] top-[-250px] `;
  const iconToggle = toggle ? (
    <XMarkIcon className='h-6 w-6' />
  ) : (
    <Bars3Icon className='h-6 w-6' />
  );
  const ariaHidden = toggle ? 'false' : 'true';

  return (
    <>
      <div className='mx-auto flex w-full max-w-5xl justify-between py-4'>
        <div className='z-50'>
          <h2>SiteName</h2>
        </div>
        <button
          onClick={setToggle}
          className='z-50 text-white'
          aria-hidden={ariaHidden}
        >
          {iconToggle}
        </button>
      </div>

      <div
        className={`${navToggle} fixed left-0 right-0 top-0 flex flex-col space-y-5 overflow-hidden bg-gray-700 bg-gradient-to-r from-purple-500 to-pink-500 p-5 text-white duration-500`}
      >
        <div className='align center m-auto flex justify-center'>
          <ul>
            <li className='list-group-item'>
              <a href='#'>An item</a>
            </li>
            <li className='list-group-item'>A second item</li>
            <li className='list-group-item'>A third item</li>
            <li className='list-group-item'>A fourth item</li>
            <li className='list-group-item'>And a fifth one</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;

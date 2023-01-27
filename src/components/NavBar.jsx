import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        <Link to='/'>
          <span className='text-white font-serif text-4xl'>phenomena</span>
        </Link>
      </div>
      <div className='flex flex-1 items-center justify-end'>
        <Link to='/addreport'>
          <button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 hover:text-white focus:outline-none focus:ring active:text-opacity-75'>
            <span className='block rounded-sm bg-black px-8 py-3 text-sm font-medium hover:bg-transparent'>
              Add Report
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        <Link to='/reports'>
          <span className='font-serif text-4xl text-white'>phenomena</span>
        </Link>
      </div>
      <div className='flex justify-end flex-1 mr-auto'>
        <Link to='/reports' className='active:text-pink-500'>
          <button className='m-2 font-serif text-xl text-white hover:text-pink-500 focus:text-pink-500'>
            new reports
          </button>
        </Link>
        {/* <span>------</span> */}
        <Link to='/closedreports' className=' active:text-pink-500'>
          <button className='m-2 font-serif text-xl text-white hover:text-pink-500 focus:text-pink-500'>
            closed reports
          </button>
        </Link>
      </div>
      <div className='flex items-center justify-end flex-1'>
        <Link to='/addreport'>
          <button className='inline-block p-1 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75'>
            <span className='block px-8 py-3 text-sm font-medium bg-black rounded-sm hover:bg-transparent'>
              Add Report
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

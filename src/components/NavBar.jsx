import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between h-32 mx-auto max-w-screen-2xl sm:px-6 lg:px-5'>
      <div className='flex items-center'>
        <Link to='/openreports'>
          <span className='font-pilowlava text-[128px] text-white'>phenomena</span>
        </Link>
      </div>

      <div className='font-robotomono flex flex-col justify-center items-end text-[14px] tracking-[4px]'>
        <Link to='/' className='active:text-green-400'>
          <button className='text-[14px] tracking-[4px] hover:text-green-400 focus:text-green-400'>about</button>
        </Link>
        <Link to='/openreports' className='active:text-green-400'>
          <button className='text-[14px] tracking-[4px] hover:text-green-400 focus:text-green-400'>experiences</button>
        </Link>
        <Link to='addreport'>
          <button className='text-[14px] tracking-[4px] hover:text-green-400 focus:text-green-400'>add report</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

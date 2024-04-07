import React from 'react';
import { Link } from 'react-router-dom';

const SubLinks = () => {
  return (
    <div className='flex justify-evenly p-1 font-robotomono text-sm tracking-[4px]'>
      <Link to='/reports' className='active:text-green-400 hover:text-green-400 focus:text-green-400'>
        all
      </Link>
      <Link to='/openreports' className='active:text-green-400 hover:text-green-400 focus:text-green-400'>
        open
      </Link>
      <Link to='/closedreports' className='active:text-green-400 hover:text-green-400 focus:text-green-400'>
        closed
      </Link>
    </div>
  );
};

export default SubLinks;

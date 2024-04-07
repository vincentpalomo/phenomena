import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between sm:h-32 mx-auto sm:px-6 lg:px-4 p-1">
      <div className="flex items-center">
        <Link to="/reports">
          <span className="font-pilowlava sm:text-[128px] text-[32px] text-white">phenomena</span>
        </Link>
      </div>

      <div className="font-robotomono flex flex-col justify-center items-end sm:text-[14px] tracking-[4px] text-xs">
        <Link to="/about" className="active:text-green-400">
          <button className="sm:text-[14px] tracking-[4px] hover:text-green-400 focus:text-green-400">about</button>
        </Link>
        <Link to="/reports" className="active:text-green-400">
          <button className="sm:text-[14px] tracking-[4px] hover:text-green-400 focus:text-green-400">reports</button>
        </Link>
        <Link to="addreport">
          <button className="sm:text-[14px] tracking-[4px] hover:text-green-400 focus:text-green-400">
            add report
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

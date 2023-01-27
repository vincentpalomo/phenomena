import React from 'react';
import { AddReport } from './AddReport';

const NavBar = () => {
  return (
    <div className='mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        <span className='text-white font-serif text-4xl'>phenomena</span>
      </div>
      <div className='flex flex-1 items-center justify-end'>
        {/* <button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 hover:text-white focus:outline-none focus:ring active:text-opacity-75'>
          <span className='block rounded-sm bg-black px-8 py-3 text-sm font-medium hover:bg-transparent'>
            Add Report
          </span>
        </button> */}
        <a
          href='#my-modal-2'
          className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 hover:text-white focus:outline-none focus:ring active:text-opacity-75'
        >
          <span className='block rounded-sm bg-black px-8 py-3 text-sm font-medium hover:bg-transparent'>
            Add Report
          </span>
        </a>

        <div className='modal' id='my-modal-2'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>What did you see or hear?</h3>
            <div className='form-control w-full max-w-xs'>
              <label className='label p-4'>
                <span className='label-text'>Title</span>
              </label>
              <input
                type='text'
                className='input input-bordered w-full max-w-xs'
              />
              <label className='label p-4'>
                <span className='label-text'>Location</span>
              </label>
              <input
                type='text'
                className='input input-bordered w-full max-w-xs'
              />
              <label className='label p-4'>
                <span className='label-text'>Content</span>
              </label>
              <input
                type='text'
                className='input input-bordered w-full max-w-xs'
              />
              <label className='label p-4'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                className='input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='modal-action'>
              <a
                href='#'
                className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 hover:text-white focus:outline-none focus:ring active:text-opacity-75'
              >
                <span className='block rounded-sm bg-black px-8 py-3 text-sm font-medium hover:bg-transparent'>
                  Report
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

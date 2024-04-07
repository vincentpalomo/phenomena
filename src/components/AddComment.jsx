import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAddComment } from '../api/api';

const AddComment = ({ reportId }) => {
  const [content, setContent] = useState('');
  const history = useNavigate();

  const createReply = async (e) => {
    e.preventDefault();
    setContent('');

    try {
      await fetchAddComment(content, reportId);
      history('/viewpost');
    } catch (error) {
      console.error('error at fetchAddComment', error);
    }
  };

  return (
    <div className='mb-2 py-16'>
      <div className='max-w-screen-xl mx-auto text-center font-robotomono lowercase tracking-[3px]'>
        {/* <h1 className='text-2xl font-bold text-white sm:text-3xl'>Got an experience for yourself?</h1> */}

        {/* <p className='mt-4'>Tell us what similiar experiences you have encountered with the paranormal</p> */}
      </div>

      <form onSubmit={createReply} className='max-w-md mx-auto mt-8 mb-0 space-y-4'>
        <div>
          <label htmlFor='content' className='sr-only'>
            Content
          </label>

          <div className='relative'>
            <textarea
              type='text'
              className='w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm font-robotomono lowercase tracking-[4px]'
              placeholder='Enter your reply'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p className='font-robotomono lowercase tracking-[3px] text-sm text-pink-600'>Replies are anonymous</p>

          <button
            type='submit'
            className='inline-flex items-center justify-center w-full px-5 py-3 text-white hover:bg-white hover:text-black border rounded-lg sm:w-auto font-robotomono lowercase tracking-[3px] text-sm'
          >
            <span>Reply</span>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 ml-3' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;

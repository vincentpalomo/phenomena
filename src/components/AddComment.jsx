import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAddComment } from '../api/api';

const AddComment = ({ reportId }) => {
  const [content, setContent] = useState('');
  console.log(reportId);

  const history = useNavigate();

  const createReply = async (e) => {
    e.preventDefault();
    setContent('');

    try {
      const addReply = await fetchAddComment(content, reportId);
      console.log(addReply);
    } catch (error) {
      console.error('error at fetchAddComment', error);
    }
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>
          Got an experience for yourself?
        </h1>

        <p className='mt-4 text-gray-500'>
          Tell us what similiar experiences you have encountered with the
          paranormal
        </p>
      </div>

      <form
        onSubmit={createReply}
        className='mx-auto mt-8 mb-0 max-w-md space-y-4'
      >
        <div>
          <label htmlFor='content' className='sr-only'>
            Content
          </label>

          <div className='relative'>
            <textarea
              type='text'
              className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
              placeholder='Enter your reply'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-sm text-pink-500'>Replies are also anonymous</p>

          <button
            type='submit'
            className='ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
          >
            Reply
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;

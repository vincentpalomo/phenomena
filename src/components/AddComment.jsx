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
      history('/');
    } catch (error) {
      console.error('error at fetchAddComment', error);
    }
  };

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-screen-xl mx-auto text-center'>
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
        className='max-w-md mx-auto mt-8 mb-0 space-y-4'
      >
        <div>
          <label htmlFor='content' className='sr-only'>
            Content
          </label>

          <div className='relative'>
            <textarea
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
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
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            Reply
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;

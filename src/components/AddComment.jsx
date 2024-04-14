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
      history(-1);
    } catch (error) {
      console.error('error at fetchAddComment', error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <form onSubmit={createReply} className="max-w-xl mx-auto mb-0 space-y-4">
        <div>
          <label htmlFor="content" className="sr-only">
            Content
          </label>

          <div className="relative">
            <textarea
              type="text"
              className="w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm font-robotomono lowercase tracking-[4px]"
              placeholder="Enter your reply"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-robotomono lowercase tracking-[3px] sm:text-lg animate-pulse blur-[1px] pr-5 w-[100%]">
            Replies are anonymous
          </p>

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-white hover:bg-white hover:text-black border rounded-lg sm:w-auto font-robotomono lowercase tracking-[3px] text-sm"
          >
            <span>Reply</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;

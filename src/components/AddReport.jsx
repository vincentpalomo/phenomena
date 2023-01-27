import React, { useState } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import { fetchCreateReport } from '../api/api';

const AddReport = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  const createReport = async (e) => {
    e.preventDefault();
    setTitle('');
    setLocation('');
    setDescription('');
    setPassword('');

    try {
      const createReport = await fetchCreateReport(
        title,
        location,
        description,
        password
      );
      console.log(createReport);
      history('/');
    } catch (error) {
      console.error('error at fetch createReport', error);
    }
  };

  return (
    <section className='animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-1 shadow-xl transition [animation-duration:_6s] hover:shadow-md'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
          <div className='lg:col-span-2 lg:py-12'>
            <p className='max-w-xl text-lg text-black'>
              Submit a report detailing your personal experience or
              investigation of a paranormal phenomenon, such as a ghost
              sighting, unexplained event, or supernatural occurrence.
            </p>

            <div className='mt-8'>
              <p className='text-2xl font-bold text-pink-600'>
                All reports are anonymous
              </p>
            </div>
          </div>

          <div className='rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12'>
            <form onSubmit={createReport} className='space-y-4'>
              <div>
                <label className='sr-only' htmlFor='name'>
                  Title
                </label>
                <input
                  className='w-full rounded-lg border-gray-200 p-3 text-sm'
                  placeholder='Title'
                  type='text'
                  id='name'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                  <label className='sr-only' htmlFor='email'>
                    Location
                  </label>
                  <input
                    className='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Location'
                    type='text'
                    id='location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className='sr-only' htmlFor='phone'>
                    Password
                  </label>
                  <input
                    className='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Password'
                    type='password'
                    id='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className='sr-only' htmlFor='message'>
                  Message
                </label>
                <textarea
                  className='w-full rounded-lg border-gray-200 p-3 text-sm'
                  placeholder='Message'
                  rows='8'
                  id='message'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className='mt-4'>
                <button
                  type='submit'
                  className='inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto'
                >
                  <span className='font-medium'>Send Report</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-3 h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReport;

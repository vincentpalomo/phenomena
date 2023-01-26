import React, { useState, useEffect } from 'react';
import { fetchAllReports } from '../api/api';

const Main = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const report = await fetchAllReports();
      setReports(report);
      console.log(report);
    } catch (error) {
      console.error('error in fetchReports', error);
    }
  };

  return (
    <>
      <div>
        {reports.map((report) => {
          return (
            <div
              className='mx-auto max-w-2xl rounded-lg bg-white shadow mb-1'
              key={report.id}
            >
              <div className='p-4'>
                <h3 className='text-xl font-medium text-gray-900'>
                  {report.title}
                </h3>
                <p className='mt-1 text-gray-500'>
                  Location: {report.location}
                </p>
                <p className='mt-1 text-gray-700'>
                  Description: {report.description}
                </p>
              </div>
              <div className='p-4'>
                <div class="my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
                  Comments
                </div>
                {report.comments.map((comment) => {
                  return (
                    <div key={comment.id} className='p-4'>
                      <p className='mt-1 text-gray-700'>{comment.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;

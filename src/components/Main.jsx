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
              className='animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-md mb-2'
              key={report.id}
            >
              <div className='rounded-[10px] bg-white p-4 !pt-20 sm:p-6'>
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
                  <div className="my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;

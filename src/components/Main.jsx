import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllReports } from '../api/api';

const Main = ({ setReportId }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const report = await fetchAllReports();
      setReports(report);
    } catch (error) {
      console.error('error in fetchReports', error);
    }
  };

  const getReportId = async (reportId) => {
    setReportId(reportId);
  };

  return (
    <>
      <div>
        {reports.map((report) => {
          return (
            <div key={report.id}>
              {!report.isExpired && (
                <div className='animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-1 shadow-xl transition [animation-duration:_6s] hover:shadow-md mb-2'>
                  <div className='rounded-[10px] bg-black p-4 sm:p-2'>
                    {/* report body */}
                    <div className='p-1 font-robotomono lowercase tracking-[4px]'>
                      <h3 className='text-xl font-medium text-white'>{report.title}</h3>
                      <div className='flex justify-between items-center'>
                        <p className='text-xs text-gray-500'>{report.location}</p>
                        <p className='text-xs'>Report ID: {report.id}</p>
                      </div>
                      <div className='flex items-center gap-4 mt-5'>
                        <p>description:</p>
                        <p className='mt-1 text-sm  text-gray-200'>{report.description}</p>
                      </div>
                    </div>
                    {/* comments */}
                    {/* <div className='p-2'>
                      <div className="my-1 flex items-center gap-1 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
                        Comments
                      </div>
                      {report.comments.map((comment) => {
                        return (
                          <div key={comment.id} className='p-1'>
                            <p className='m-1 text-gray-700'>{comment.content}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className='p-2'>
                      <Link to='/addcomment'>
                        <button onClick={() => getReportId(report.id)} className='my-1 text-pink-500'>
                          <span className='font-bold'>Reply to thread</span>
                        </button>
                      </Link>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;

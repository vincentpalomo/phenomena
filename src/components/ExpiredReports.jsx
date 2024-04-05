import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllReports } from '../api/api';

const ExpiredReports = ({ setReportId }) => {
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

  const getReportId = async (reportId) => {
    setReportId(reportId);
  };

  return (
    <>
      <div className="flex justify-evenly p-1 font-robotomono text-sm tracking-[4px]">
        <Link to="/openreports" className="active:text-green-400 hover:text-green-400 focus:text-green-400">
          open
        </Link>
        <Link to="/closedreports" className="active:text-green-400 hover:text-green-400 focus:text-green-400">
          closed
        </Link>
      </div>
      <div>
        {reports.map((report) => {
          return (
            <div key={report.id}>
              {report.isExpired && (
                <div className="animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-1 shadow-xl transition [animation-duration:_6s] hover:shadow-md mb-2 h-[10vh]">
                  <div className="rounded-[10px] bg-black p-4 sm:p-2 h-full">
                    {/* report body */}
                    <div className="p-1 font-robotomono lowercase tracking-[4px] flex flex-col justify-center h-full">
                      <Link
                        to="/viewpost"
                        className="text-xl font-medium text-white"
                        onClick={() => getReportId(report.id)}
                      >
                        {report.title}
                      </Link>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">{report.location}</p>
                        <p className="text-xs">Report ID: {report.id}</p>
                      </div>
                      {/* <div className="flex items-center gap-4 mt-5">
                        <p>description:</p>
                        <p className="mt-1 text-sm  text-gray-200">{report.description}</p>
                      </div> */}
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

export default ExpiredReports;

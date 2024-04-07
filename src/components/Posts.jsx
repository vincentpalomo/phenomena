import React, { useEffect, useState } from 'react';
import { fetchReport } from '../api/api';
import { Link } from 'react-router-dom';

const Posts = ({ reportId, setReportId }) => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const storedReportId = localStorage.getItem('reportId');
    if (storedReportId) {
      setReportId(storedReportId);
    }
  }, [setReportId]);

  useEffect(() => {
    if (reportId) {
      localStorage.setItem('reportId', reportId);
      reportDetails();
    }
  }, [reportId]);

  const reportDetails = async () => {
    try {
      const fetchedReport = await fetchReport(reportId);
      setReport(fetchedReport);
    } catch (error) {
      console.error('error in fetchReport', error);
    }
  };

  const getReportId = (reportId) => {
    setReportId(reportId);
  };

  // useEffect(() => {
  //   const storedReportId = localStorage.getItem('reportId');
  //   if (storedReportId) {
  //     console.log(storedReportId);
  //     getReportId(storedReportId);
  //   }

  //   setTimeout(() => {
  //     reportDetails();
  //   }, 100);
  // }, []);

  // useEffect(() => {
  //   if (reportId) {
  //     localStorage.setItem('reportId', reportId);
  //   }
  // }, [reportId]);

  // const reportDetails = async () => {
  //   try {
  //     const report = await fetchReport(reportId);
  //     setReport(report);
  //   } catch (error) {
  //     console.error('error in fetchReport', error);
  //   }
  // };

  // const getReportId = async (reportId) => {
  //   setReportId(reportId);
  // };

  return (
    <>
      {report ? (
        <div>
          {/* <Link to='/reports' className='tracking-[4px] font-robotomono text-sm hover:text-green-500'>
            back
          </Link> */}
          <div className='h-[75vh] flex flex-col justify-evenly lowercase'>
            <div>
              <div className='flex justify-between font-robotomono text-xs tracking-[4px] border-b-2 border-b-white '>
                <div className='py-2 px-1'>
                  <div className='text-5xl font-robotomono tracking-[3px] pb-2'>{report?.title}</div>
                  <div className='pl-2'>{report?.location}</div>
                </div>
                <div className='flex flex-col justify-end items-end pb-2'>
                  <div className='pb-2'>
                    {report?.isExpired ? (
                      <div className='text-red-500 font-robotomono text-xs tracking-[4px]'>closed</div>
                    ) : (
                      <div className='text-green-500 font-robotomono text-xs tracking-[4px]'>open</div>
                    )}
                  </div>
                  <div>report id: {report?.id}</div>
                </div>
              </div>
            </div>

            <div className='px-10'>
              {/* <p className="font-robotomono text-sm tracking-[4px]">description:</p> */}
              <div className='font-robotomono text-sm tracking-[4px]'> {report?.description}</div>
            </div>
            <div className='border-b-2'>
              {/* {report?.isExpired ? (
            <div className="text-red-500 font-robotomono text-xs tracking-[4px] border-b-2 border-t-2 p-2">closed</div>
          ) : (
            <div className="text-green-500 font-robotomono text-xs tracking-[4px] border-b-2 border-t-2 p-2">open</div>
          )} */}
            </div>
            <div className='font-robotomono tracking-[4px] text-sm'>
              <div className='flex justify-between mb-3'>
                <p className='pb-2'>Comments:</p>
                <div>
                  {!report?.isExpired && (
                    <Link
                      to='/addcomment'
                      onClick={() => getReportId(report.id)}
                      className='text-xs text-center hover:text-black hover:bg-white border rounded-lg p-2'
                    >
                      reply
                    </Link>
                  )}
                </div>
              </div>
              {report.comments &&
                report.comments.map((comment) => {
                  return (
                    <div key={comment.id} className='flex justify-between border-b-2 pl-4 mb-5'>
                      <p className='w-[70vw]'>{comment.content}</p>
                      <p className='text-xs'>comment id: {comment.id}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <div className='h-full flex justify-center items-center font-robotomono tracking-[4px] animate-pulse'>loading...</div>
      )}
    </>
  );
};

export default Posts;

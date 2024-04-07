import React, { useEffect, useState } from 'react';
import { fetchReport } from '../api/api';
import { Link } from 'react-router-dom';

const Posts = ({ reportId, setReportId }) => {
  const [report, setReport] = useState({});

  useEffect(() => {
    reportDetails();
  }, []);

  const reportDetails = async () => {
    try {
      const report = await fetchReport(reportId);
      console.log(report);
      setReport(report);
    } catch (error) {
      console.error('error in fetchReport', error);
    }
  };

  const getReportId = async (reportId) => {
    setReportId(reportId);
  };

  return (
    <>
      <Link to="/reports" className="tracking-[4px] font-robotomono text-sm hover:text-green-500">
        back
      </Link>
      <div className="h-[75vh] flex flex-col justify-evenly lowercase">
        <div>
          <div className="flex justify-between font-robotomono text-xs tracking-[4px] border-b-2 border-b-white ">
            <div className="py-2 px-1">
              <div className="text-5xl font-robotomono tracking-[3px] pb-2">{report?.title}</div>
              <div className="pl-2">{report?.location}</div>
            </div>
            <div className="flex flex-col justify-end items-end pb-2">
              <div className="pb-2">
                {report?.isExpired ? (
                  <div className="text-red-500 font-robotomono text-xs tracking-[4px]">closed</div>
                ) : (
                  <div className="text-green-500 font-robotomono text-xs tracking-[4px]">open</div>
                )}
              </div>
              <div>report id: {report?.id}</div>
            </div>
          </div>
        </div>

        <div className="px-10">
          {/* <p className="font-robotomono text-sm tracking-[4px]">description:</p> */}
          <div className="font-robotomono text-sm tracking-[4px]"> {report?.description}</div>
        </div>
        <div className="border-b-2">
          {/* {report?.isExpired ? (
            <div className="text-red-500 font-robotomono text-xs tracking-[4px] border-b-2 border-t-2 p-2">closed</div>
          ) : (
            <div className="text-green-500 font-robotomono text-xs tracking-[4px] border-b-2 border-t-2 p-2">open</div>
          )} */}
        </div>
        <div className="font-robotomono tracking-[4px] text-sm">
          <p className="pb-2">Comments:</p>
          <div className="text-xs hover:text-green-500">
            {!report?.isExpired && (
              <Link to="/addcomment" onClick={() => getReportId(report.id)}>
                add comment
              </Link>
            )}
          </div>
          {report.comments &&
            report.comments.map((comment) => {
              return (
                <div key={comment.id} className="flex justify-between border-b-2 pl-4 mb-5">
                  <p className="w-[70vw]">{comment.content}</p>
                  <p className="text-xs">comment id: {comment.id}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Posts;
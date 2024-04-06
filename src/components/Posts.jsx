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
    <div className="h-[75vh] flex flex-col justify-evenly lowercase">
      <div>
        <div className="text-5xl font-robotomono tracking-[3px]">{report?.title}</div>
        <div className="flex justify-between font-robotomono text-xs tracking-[4px] border-b-2 border-b-white pb-2 px-1">
          <div>{report?.location}</div>
          <div>report id: {report?.id}</div>
        </div>
      </div>

      <div className="px-10">
        {/* <p className="font-robotomono text-sm tracking-[4px]">description:</p> */}
        <div className="font-robotomono text-sm tracking-[4px]"> {report?.description}</div>
      </div>
      <div>
        {report?.isExpired ? (
          <div className="text-red-500 font-robotomono text-xs tracking-[4px]">post is expired</div>
        ) : (
          <Link to="/addcomment" onClick={() => getReportId(report.id)}>
            add comment
          </Link>
        )}
      </div>
      <div className="font-robotomono tracking-[4px] text-sm">
        <p className="pb-5">Comments:</p>
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
  );
};

export default Posts;

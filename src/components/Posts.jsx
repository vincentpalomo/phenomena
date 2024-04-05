import React, { useEffect, useState } from 'react';
import { fetchReport } from '../api/api';

const Posts = ({ reportId }) => {
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

  return (
    <div>
      <div>{report?.id}</div>
      <div>{report?.title}</div>
      <div>{report?.description}</div>
      <div>
        <div>add comment</div>
      </div>
    </div>
  );
};

export default Posts;

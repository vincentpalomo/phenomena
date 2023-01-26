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
      <h1 className='text-3xl font-bold underline'>Phenomena Reports!</h1>
      <div>
        {reports.map((report) => {
          return (
            <div key={report.id}>
              <h3>Report: {report.title}</h3>
              <div>
                <p>Location: {report.location}</p>
                <p>Description: {report.description}</p>
              </div>
              <div>
                {report.comments.map((comment) => {
                  return (
                    <div>
                      <h3>Comments:</h3>
                      <p>{comment.content}</p>
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

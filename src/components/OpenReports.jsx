import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllReports } from '../api/api';

const OpenReports = ({ setReportId }) => {
  const [reports, setReports] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetchReports();
    }, 100);
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
    localStorage.setItem('reportId', reportId);
    setReportId(reportId);
  };

  let reportsFilter = reports?.filter((r) => r.isExpired == false);

  console.log(reportsFilter);

  return (
    // <>
    //   <div>
    //     {reports ? (
    //       <div>
    //         {reports.length > 0 ? (
    //           reports.map((report) => {
    //             return (
    //               <div key={report.id}>
    //                 {!report.isExpired && (
    //                   <div className="border-b-2 mb-2 h-[10vh]">
    //                     <div className="rounded-[10px] bg-black p-1 sm:p-2 h-full">
    //                       {/* report body */}
    //                       <div className="p-1 font-robotomono lowercase sm:tracking-[4px] tracking-[2px] leading-4 flex flex-col justify-center h-full">
    //                         <div className="flex justify-between">
    //                           <Link
    //                             to={`/report/${report.id}`}
    //                             className="sm:text-xl font-medium text-white hover:text-green-400"
    //                             onClick={() => getReportId(report.id)}
    //                           >
    //                             {report.title}
    //                           </Link>
    //                           <div className="text-xs text-red-500">
    //                             {report.isExpired ? <div>Closed</div> : <div className="text-green-500">Open</div>}
    //                           </div>
    //                         </div>
    //                         <div className="flex justify-between items-center">
    //                           <p className="text-xs text-gray-500">{report.location}</p>
    //                           <p className="text-xs">Report ID: {report.id}</p>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 )}
    //               </div>
    //             );
    //           })
    //         ) : (
    //           <div className="h-[70vh] flex justify-center items-center font-robotomono tracking-[4px]">
    //             no open reports
    //             {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //               Add Post
    //             </button> */}
    //           </div>
    //         )}
    //       </div>
    //     ) : (
    //       <div className="h-[70vh] flex justify-center items-center font-robotomono tracking-[4px] animate-pulse">
    //         loading...
    //       </div>
    //     )}
    //   </div>
    // </>

    <>
      <div>
        {reports ? (
          <div>
            {reportsFilter.length > 0 ? ( // using reportsFilter.length instead of reports.length
              reportsFilter.map((report) => {
                return (
                  <div key={report.id}>
                    <div className="border-b-2 mb-2 h-[10vh]">
                      <div className="rounded-[10px] bg-black p-1 sm:p-2 h-full">
                        {/* report body */}
                        <div className="p-1 font-robotomono lowercase sm:tracking-[4px] tracking-[2px] leading-4 flex flex-col justify-center h-full">
                          <div className="flex justify-between">
                            <Link
                              to={`/report/${report.id}`}
                              className="sm:text-xl font-medium text-white hover:text-green-400"
                              onClick={() => getReportId(report.id)}
                            >
                              {report.title}
                            </Link>
                            <div className="text-xs text-red-500">
                              {report.isExpired ? <div>Closed</div> : <div className="text-green-500">Open</div>}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-xs text-gray-500">{report.location}</p>
                            <p className="text-xs">Report ID: {report.id}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="h-[70vh] flex justify-center items-center font-robotomono tracking-[4px]">
                no open reports
              </div>
            )}
          </div>
        ) : (
          <div className="h-[70vh] flex justify-center items-center font-robotomono tracking-[4px] animate-pulse">
            loading...
          </div>
        )}
      </div>
    </>
  );
};

export default OpenReports;

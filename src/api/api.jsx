export const APIURL = 'https://phenomena-gmx2.onrender.com/api';

// fetch all reports
export const fetchAllReports = async () => {
  const res = await fetch(`${APIURL}/reports`);
  const json = await res.json();
  console.log(json);
  return json;
};

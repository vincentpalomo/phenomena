export const APIURL = 'https://phenomena-gmx2.onrender.com/api';

// fetch all reports
export const fetchAllReports = async () => {
  const res = await fetch(`${APIURL}/reports`);
  const json = await res.json();
  console.log('from api', json.reports);
  return json.reports;
};

// create report
export const fetchCreateReport = async (
  title,
  location,
  description,
  password
) => {
  const res = await fetch(`${APIURL}/reports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: `${title}`,
      location: `${location}`,
      description: `${description}`,
      password: `${password}`,
    }),
  });
  const json = await res.json();
  return json;
};

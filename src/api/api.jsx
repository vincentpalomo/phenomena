export const APIURL = 'https://phenomena-gmx2.onrender.com/api';

// fetch all reports
export const fetchAllReports = async () => {
  const res = await fetch(`${APIURL}/reports`);
  const json = await res.json();
  return json.reports;
};
export const fetchReport = async (reportId) => {
  const res = await fetch(`${APIURL}/reports/${reportId}`);
  const json = await res.json();
  return json;
};

// create report
export const fetchCreateReport = async (title, location, description, password) => {
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

// delete report
export const fetchDeleteReport = async (password, reportId) => {
  const res = await fetch(`${APIURL}/reports/${reportId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: `${password}`,
    }),
  });
  const json = await res.json();
  return json;
};

// add comment
export const fetchAddComment = async (content, reportId) => {
  const res = await fetch(`${APIURL}/reports/${reportId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: `${content}`,
    }),
  });
  const json = await res.json();
  return json;
};

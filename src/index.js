import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Main,
  Navbar,
  AddReport,
  AddComment,
  ExpiredReports,
} from './components';
import styles from './global.css';

const App = () => {
  const [reportId, setReportId] = useState('');
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <header className='p-4 text-white bg-black'>
          <Navbar />
        </header>
        <div className='flex flex-row flex-1'>
          <main className='flex-1 p-4 bg-black'>
            <Routes>
              <Route
                path='/reports'
                element={<Main setReportId={setReportId} />}
              />
              <Route path='/addreport' element={<AddReport />} />
              <Route
                path='/addcomment'
                element={<AddComment reportId={reportId} />}
              />
              <Route path='/closedreports' element={<ExpiredReports />} />
            </Routes>
          </main>
          <nav className='order-first w-32 p-4 bg-black'></nav>
          <aside className='w-32 p-4 bg-black'></aside>
        </div>
        <footer className='p-4 text-center bg-black'>
          <span className='font-semibold text-transparent bg-gradient-to-r bg-clip-text from-green-300 via-blue-500 to-purple-600 animate-text'>
            phenomena 2023
          </span>
        </footer>
      </div>
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

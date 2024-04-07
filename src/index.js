import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Main, Navbar, AddReport, AddComment, ExpiredReports } from './components';
import './global.css';
import Posts from './components/Posts';
import OpenReports from './components/OpenReports';
import About from './components/About';
import SubLinks from './components/SubLinks';

const App = () => {
  const [reportId, setReportId] = useState('');
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <header className=' text-white bg-black'>
          <Navbar />
          <SubLinks />
        </header>
        <div className='flex flex-row flex-1'>
          <main className='flex-1 px-5 bg-black'>
            <Routes>
              <Route path='/reports' element={<Main setReportId={setReportId} />} />
              <Route path='/openreports' element={<OpenReports setReportId={setReportId} />} />
              <Route path='/addreport' element={<AddReport />} />
              <Route path='/addcomment' element={<AddComment reportId={reportId} />} />
              <Route path='/closedreports' element={<ExpiredReports setReportId={setReportId} />} />
              <Route path='*' element={<Navigate to='/reports' replace />} />
              <Route path='/viewpost' element={<Posts reportId={reportId} setReportId={setReportId} />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
          {/* <nav className='order-first w-32 p-0 bg-black'></nav>
          <aside className='w-32 p-0 bg-black'></aside> */}
        </div>
        {/* <footer className='p-4 text-center bg-black'>
          <span className='font-semibold text-transparent bg-gradient-to-r bg-clip-text from-green-300 via-blue-500 to-purple-600 animate-text'>
            phenomena 2023
          </span>
        </footer> */}
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

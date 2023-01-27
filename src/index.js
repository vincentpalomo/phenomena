import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Navbar, AddReport } from './components';
import styles from './global.css';

const App = () => {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <header className='bg-black text-white p-4'>
          <Navbar />
        </header>
        <div className='flex flex-1 flex-row'>
          <main className='flex-1 bg-black p-4'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/addreport' element={<AddReport />} />
            </Routes>
          </main>
          <nav className='order-first w-32 bg-black p-4'></nav>
          <aside className='w-32 bg-black p-4'></aside>
        </div>
        <footer className='bg-black p-4'></footer>
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

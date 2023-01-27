import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main, Navbar } from './components';
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
            <Main />
          </main>
          <nav className='order-first w-32 bg-black p-4'></nav>
          <aside className='w-32 bg-black p-4'></aside>
        </div>
        <footer className='bg-black p-4'>Footer</footer>
      </div>
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from './components';
import styles from './global.css';

const App = () => {
  return (
    <>
      <Main />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);

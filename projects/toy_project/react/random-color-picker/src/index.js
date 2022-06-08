import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import Random from './components/random';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Random />
  </React.StrictMode>
);

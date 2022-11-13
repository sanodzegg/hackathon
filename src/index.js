import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Landing';

import "./assets/styles/global/global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
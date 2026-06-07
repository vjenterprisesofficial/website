import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

const redirectPath = window.location.search.match(/^\?\/(.+)/);

if (redirectPath) {
  const cleanPath = `/${redirectPath[1].replace(/&/g, '?')}`;
  window.history.replaceState(null, '', cleanPath + window.location.hash);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

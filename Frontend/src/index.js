import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Mencari elemen dengan id 'root' di file public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Me-render komponen App ke dalam root tersebut
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
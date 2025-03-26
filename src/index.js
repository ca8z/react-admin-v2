import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BraowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BraowserRouter>
        <App />
    </BraowserRouter>

  </React.StrictMode>
);


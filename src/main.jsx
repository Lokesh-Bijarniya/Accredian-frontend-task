import React from 'react'; // Optional but safe
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this file exists
import App from './App.jsx'; // Ensure this file exists
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
    
  </StrictMode>
);
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';

import customFetch from './utils/customFetch.js'



import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@material-tailwind/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <ToastContainer position='top-center' />
    </ThemeProvider>
  </React.StrictMode>,
)

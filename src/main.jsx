import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// mui
import { CssBaseline } from '@mui/material'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

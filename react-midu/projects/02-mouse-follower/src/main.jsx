import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//^ React.StrictMode
//! Executes only in dev mode to depurate potential issues
// does not render any visible UI. It activates additional checks and warnings for its descendants, and ensure that your effects do a clean up
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

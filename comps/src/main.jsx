import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NavigationProvider } from './context/navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
)

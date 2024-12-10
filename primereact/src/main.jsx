import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import App from './App.jsx'
import './index.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeicons/primeicons.css'

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PrimeReactProvider>
)

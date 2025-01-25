import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ScrollTracker from './ScrollTracker'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ScrollTracker /> */}
  </StrictMode>
)

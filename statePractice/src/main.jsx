import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import GoingOut from './practice/goingOut.jsx'
import FavThings from './practice/favThings'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavThings />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages'
import './styles/global.css'
import './pages/Home/styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

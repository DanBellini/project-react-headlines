import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import './assets/styles/reset.css'
import './assets/styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
    </Routes>
  </BrowserRouter>
  ,
)

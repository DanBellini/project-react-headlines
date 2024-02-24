import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import './assets/styles/reset.css'
import './assets/styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopBar from './components/TopBar/Topbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path='/' element={<App/>}/>
    </Routes>
  </BrowserRouter>
  ,
)

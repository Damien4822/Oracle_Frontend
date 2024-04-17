import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-router-dom'
import axios from 'axios'
import 'bootstrap'
import { BrowserRouter } from 'react-router-dom'
import 'jwt-decode'
import 'react-datepicker'
import 'moment'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter> 
  </React.StrictMode>
)

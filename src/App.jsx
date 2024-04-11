import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegiserComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './Components/HomeComponent';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path ="/home" element={<HomeComponent/>}/>
        <Route path ="/" element={<HomeComponent/>}/>
      </Routes>
    </div>
  )
}

export default App

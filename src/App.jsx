import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegiserComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './Components/HomeComponent';
import BookListComponent from './Components/BookListComponent';
import AuthorList from './Components/AuthorList';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path ="/home" element={<HomeComponent/>}/>
        <Route path ="/" element={<HomeComponent/>}/>
        <Route path = "/book/list"element={<BookListComponent/>}/>
        <Route path = "/author/list" element={<AuthorList/>}/>
      </Routes>
    </div>
  )
}

export default App

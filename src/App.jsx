import { useState } from 'react'
import {Route, Routes} from "react-router-dom"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Components/Public/LoginComponent';
import RegiserComponent from './Components/Public/RegiserComponent';
import HomeComponent from './Components/Public/HomeComponent';
import BookListComponent from './Components/Public/BookListComponent';
import AuthorList from './Components/Public/AuthorList';
import Author_Detail from './Components/Public/Author_Detail';
import Book_Detail from './Components/Public/Book_Detail';
import DocGia_Home from './Components/DocGia/DocGia_Home';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/register" element={<RegiserComponent/>}/>
        <Route path ="/home" element={<HomeComponent/>}/>
        <Route path ="/" element={<HomeComponent/>}/>
        <Route path = "/public/book/list"element={<BookListComponent/>}/>
        <Route path = "/public/book/:id" element={<Book_Detail/>}/>
        <Route path = "/public/author/list" element={<AuthorList/>}/>
        <Route path = "/public/author/:id" element={<Author_Detail/>}/>
        
        <Route path ="/docgia" element={<DocGia_Home/>}/>
      </Routes>
    </div>
  )
}

export default App

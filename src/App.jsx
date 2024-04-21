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
import DocGia_PhieuMuon from './Components/DocGia/DocGia_PhieuMuon';
import DocGia_CTPhieuMuon from './Components/DocGia/DocGia_CTPhieuMuon';
import DocGia_PhieuMuonCreate from './Components/DocGia/DocGia_PhieuMuonCreate';
import DauSachList from './Components/Admin/DauSachList';
import NhaXuatBanList from './Components/Admin/NhaXuatBanList';
import TaiKhoanList from './Components/Admin/TaiKhoanList';
import DauSachDetail from './Components/Admin/DauSachDetail';
import TacGiaDetail from './Components/Admin/TacGiaDetail';
import NXBCreate from './Components/Admin/NXBCreate';
import NXBDetail from './Components/Admin/NXBDetail';
import TaiKhoanDetail from './Components/Admin/TaiKhoanDetail';
import PhieuMuonList from './Components/ThuThu/PhieuMuonList';
import PhieuMuonDetail from './Components/ThuThu/PhieuMuonDetail';
import DocGia_TheDocGia from './Components/DocGia/DocGia_TheDocGia';

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
        <Route path="/docgia/phieumuon" element={<DocGia_PhieuMuon/>}/>
        <Route path="/docgia/phieumuon/:id/chitiet" element={<DocGia_CTPhieuMuon/>}/>
        <Route path="/docgia/phieumuon/create" element={<DocGia_PhieuMuonCreate/>}/>
        <Route path="/docgia/thedocgia" element={<DocGia_TheDocGia/>}/>

        <Route path="/admin" element={<DauSachList/>}/>
        <Route path = "/admin/book/:id" element={<DauSachDetail/>}/>
        <Route path="/admin/nxb" element={<NhaXuatBanList/>}/>
        <Route path="/admin/nxb/:id" element={<NXBDetail/>}/>
        <Route path="/admin/nxb/create" element={<NXBCreate/>}/>
        <Route path="/admin/taikhoan" element={<TaiKhoanList/>}/>
        <Route path="/admin/taikhoan/:id" element={<TaiKhoanDetail/>}/>
        <Route path="/admin/tacgia/:id" element={<TacGiaDetail/>}/>
     
        <Route path="/thuthu" element={<PhieuMuonList/>}/>
        <Route path="/thuthu/phieumuon/:id" element={<PhieuMuonDetail/>}/>
      </Routes>
    </div>
  )
}

export default App

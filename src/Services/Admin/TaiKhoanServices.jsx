import axios from "axios";

const ADMIN_API = "http://localhost:8080/admin/taikhoan";

class TaiKhoanServices {
    getOne(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(ADMIN_API+"/" + id,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});
    }
    getAll()
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(ADMIN_API+"/index",{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});
    }
    update(taikhoan){
        const token= localStorage.getItem("Authorization");
        return axios.put(ADMIN_API,taikhoan,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});
    }
    delete(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.delete(ADMIN_API+ "/"+ id,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});
    }
    getNhanVien(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get("http://localhost:8080/admin/nhanvien/taikhoan/"+ id,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});
    }
    getDocGia(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get("http://localhost:8080/admin/docgia/taikhoan/"+ id,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});
    }
}

export default new TaiKhoanServices()
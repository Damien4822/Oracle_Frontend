import axios from "axios";

const ADMIN_API = "http://localhost:8080/admin/nxb";

class BookServices {
   getAll(){
    const token= localStorage.getItem("Authorization");
    return axios.get(ADMIN_API+"/index",{
        Headers:{
            'Authorization':'Bearer '+ token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }});
   }
   getOne(id){
    const token= localStorage.getItem("Authorization");
    return axios.get(ADMIN_API+"/"+id,{
        Headers:{
            'Authorization':'Bearer '+ token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }});
   }
    delete(id)
    {
        const token= localStorage.getItem("Authorization");
    return axios.delete(ADMIN_API+"/"+id,{
        Headers:{
            'Authorization':'Bearer '+ token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }});
    }
    create(nxb)
    {
        const token= localStorage.getItem("Authorization");
        return axios.post(ADMIN_API+"/create",nxb,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});
    }
}

export default new BookServices()
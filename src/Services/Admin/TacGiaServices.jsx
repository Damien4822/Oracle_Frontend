import axios from "axios";

const ADMIN_API = "http://localhost:8080/admin/tacgia";

class BookServices {
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
    update(tacgia){
        const token= localStorage.getItem("Authorization");
        return axios.put(ADMIN_API,tacgia,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});
    }
    
}

export default new BookServices()
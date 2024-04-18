import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ADMIN_API = "http://localhost:8080/admin/";

class DocGiaServices {
    getAllDauSach()
    {
    return axios.get(ADMIN_API+"dausach/index");
    }
    deleteBook(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.delete(ADMIN_API+"dausach/"+ id,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }});

    }
}

export default new DocGiaServices()
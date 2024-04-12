import axios from "axios";

const DauSach_API = "http://localhost:8080/public/dausach/";

class BookServices {
    getAll() {
        return axios.get(DauSach_API + "index");
    }
    getOne(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(USER_API + id,{
            headers:{
                'Authorization':'Bearer '+token,
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS,PUT",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
            }
        });
    }
    
}

export default new BookServices()
import axios from "axios";

const TacGia_API = "http://localhost:8080/public/tacgia/";

class BookServices {
    getAll() {
        return axios.get(TacGia_API + "index");
    }
    getOne(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(TacGia_API + id);
    }
    
}

export default new BookServices()
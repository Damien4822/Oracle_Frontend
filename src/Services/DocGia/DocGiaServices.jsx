import axios from "axios";
import { jwtDecode } from "jwt-decode";

const DOCGIA_API = "http://localhost:8080/docgia/";

class DocGiaService {
    getInfo(ten) {
        const token= localStorage.getItem("Authorization");
        return axios.get(DOCGIA_API + "getInfo/" + ten ,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
            
    }
    check()
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(DOCGIA_API + "hello",{
            Headers:{
                'Authorization':'Bearer '+token,
                'Access-Control-Allow-Origin': '*', 
                'Content-Type': 'application/json',
            }});
    }
    update(docgia)
    {
        const token= localStorage.getItem("Authorization");
        return axios.put(DOCGIA_API+"update", docgia,{
            Headers:{
            'Authorization':'Bearer '+token,
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        }});
    }
    
}

export default new DocGiaService()
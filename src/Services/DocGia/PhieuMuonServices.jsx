import axios from "axios";
import { jwtDecode } from "jwt-decode";

const DOCGIA_API = "http://localhost:8080/docgia/";

class DocGiaPhieuMuonService {
    getAllPhieuMuonByDocGiaId(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(DOCGIA_API +parseInt(id)+ " /phieumuon/index",{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
            
    }
}

export default new DocGiaPhieuMuonService()
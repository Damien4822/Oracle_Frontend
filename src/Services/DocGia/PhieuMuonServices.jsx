import axios from "axios";
import { jwtDecode } from "jwt-decode";

const PhieuMuon_API = "http://localhost:8080/docgia/";
const CTPhieuMuon_API= "http://localhost:8080/docgia/phieumuon/"

class DocGiaPhieuMuonService {
    getAllPhieuMuonByDocGiaId(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(PhieuMuon_API +parseInt(id)+ " /phieumuon/index",{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
    }
    getAllChiTietPhieuMuonByPhieuMuonId(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(CTPhieuMuon_API+parseInt(id)+ " /ctphieumuon/index",{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
    }
}

export default new DocGiaPhieuMuonService()
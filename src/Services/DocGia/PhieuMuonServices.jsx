import axios from "axios";
import { jwtDecode } from "jwt-decode";

const PhieuMuon_API = "http://localhost:8080/docgia/";
const CTPhieuMuon_API= "http://localhost:8080/docgia/phieumuon/"
const QuyenSach_API = "http://localhost:8080/docgia/quyensach/";
const DauSach_API = "http://localhost:8080/public/dausach/";
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
  
    getAllQuyenSach(id)
    {
    return axios.get(DauSach_API + id + "/quyensach/index");
    
    }
    getAll() {
        return axios.get(DauSach_API + "index");
    }
    createPhieuMuon(phieu)
    {
        const token= localStorage.getItem("Authorization");
        return axios.post(PhieuMuon_API + "create",phieu,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
    }
}

export default new DocGiaPhieuMuonService()
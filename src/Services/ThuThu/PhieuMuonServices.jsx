import axios from "axios"
const THUTHU_API="http://localhost:8080/thuthu"
class PhieuMuonServices
{
    getAllPhieuMuon()
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(THUTHU_API+"/phieumuon/index",{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
    }
    getOne(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(THUTHU_API+"/phieumuon/"+id,{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
    }
    getAllChiTiet(id)
    {
        const token= localStorage.getItem("Authorization");
        return axios.get(THUTHU_API+"/phieumuon/"+id+"/ctphieumuon/index",{
            Headers:{
                'Authorization':'Bearer '+ token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
    }
}
export default new PhieuMuonServices()
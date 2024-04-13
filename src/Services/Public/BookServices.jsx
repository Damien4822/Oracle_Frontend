import axios from "axios";

const DauSach_API = "http://localhost:8080/public/dausach/";

class BookServices {
    getAll() {
        return axios.get(DauSach_API + "index");
    }
    getOne(id)
    {
        return axios.get(DauSach_API + id);
    }
    getAllQuyenSach(id)
    {
    return axios.get(DauSach_API + id + "/quyensach/index");
    }
    getAllTacGia(id)
    {
        return axios.get(DauSach_API + id + "/tacgia/index");
    }

}

export default new BookServices()
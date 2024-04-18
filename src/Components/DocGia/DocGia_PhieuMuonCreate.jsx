import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import DocGiaServices from '../../Services/DocGia/DocGiaServices';
import PhieuMuonServices from '../../Services/DocGia/PhieuMuonServices';
import BookServices from '../../Services/Public/BookServices';
import { withRouter } from '../../withRouter';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
class DocGia_PhieuMuonCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ngayMuon: null,
            ngayTra: null,
            thanhTien: '',
            soLuong: '',
            ngayLay: null,
            docgia: [],
            dauSachs: [],
            quyenSachs: null,
            sachMuons: [],
            quyenSachId: '',
        }
        this.ngayLayChange = this.ngayLayChange.bind(this);
        this.ngayTraChange = this.ngayTraChange.bind(this);
        this.TaoPhieu = this.TaoPhieu.bind(this);
        this.chonQuyenSach = this.chonQuyenSach.bind(this);
        this.chonDauSach = this.chonDauSach.bind(this);
        this.themQuyenSach = this.themQuyenSach.bind(this);
    }
    componentDidMount() {
        DocGiaServices.getInfo(localStorage.getItem('name')).then(res => {
            this.setState({ docgia: res.data })
        });
        PhieuMuonServices.getAll().then(res => {
            this.setState({ dauSachs: res.data });
            console.log(this.state.dauSachs);
        });


    }
    ngayLayChange = date => {

        console.log(moment(date).format("YYYY-MM-DD").toString())
        this.setState({ ngayLay: moment(date).format("YYYY-MM-DD").toString() })

    };
    themQuyenSach =(e) => {
        e.preventDefault();
        const index = e.target.selectedIndex;
        const quyenSach = e.target.childNodes[index]
       this.setState({sachMuons: quyenSach}), () =>{
         console.log(this.state.sachMuons)
         window.location.reload();
        };
       
    }
    chonQuyenSach = (e) => {
        e.preventDefault();
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        console.log(option);  
            this.setState({ quyenSachId:option }, () => console.log(this.state.quyenSachId));
    }
    chonDauSach = (e) => {
        e.preventDefault();
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        console.log(option);
        PhieuMuonServices.getAllQuyenSach(option.toString()).then(res => {
            
            this.setState({ quyenSachs: res.data }, () => console.log(this.state.quyenSachs));
        });
    }
    ngayTraChange = date => {
        console.log(moment(date).format("YYYY-MM-DD").toString())
        this.setState({ ngayTra: moment(date).format("YYYY-MM-DD").toString() })

    };
    TaoPhieu = (e) => {
        e.preventDefault();
        console.log(this.state.ngayLay);
        let phieu = {
            ngayMuon: this.state.ngayLay, ngayTra: this.state.ngayTra,
            ngayLap: moment(new Date()).format("YYYY-MM-DD").toString(),
            tongTien:0,tinhTrangPhieu: false, MaNV:null
        }
        console.log(phieu);
        PhieuMuonServices.createPhieuMuon(phieu).then(res => console.log(res.data))
    }

    render() {

        return (
            <div>
                <div className='row'>
                    <div className="col-sm-1">
                        <a href="/docgia/phieumuon" >Quay về trang Phiếu Mượn</a>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="card col-md-8 offset-md-3 offset-md-3">
                            <h3 className="text-center">Thông tin phiếu mượn</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Ngày hẹn lấy sách</label>
                                        <DatePicker
                                            selected={this.state.ngayLay}
                                            onChange={this.ngayLayChange}
                                            dateFormat="yyyy/MM/dd"
                                            value={this.state.ngayLay}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ngày hẹn trả sách</label>
                                        <DatePicker
                                            selected={this.state.ngayTra}
                                            onChange={this.ngayTraChange}
                                            dateFormat="yyyy/MM/dd"
                                            value={this.state.ngayTra}
                                        />
                                    </div>
                                    <hr />
                                    <div>
                                        <h3 className="text-center">Thêm sách</h3>
                                        <div>
                                        <div>
                                            <label>Chọn đầu sách:</label>
                                            <select onChange={this.chonDauSach}>{
                                                this.state.dauSachs.map((dausach) => {
                                                    return <option id={dausach.id} value={dausach.id} key={dausach.id}>{dausach.tenDauSach}</option>
                                                })
                                            }</select>
                                        </div>
                                        <>
                                        {
                                            this.state.quyenSachs !== null
                                                ?
                                                (
                                                    <div>
                                                    <label>Chọn quyển sách:</label>
                                                    <select onChange={this.chonQuyenSach}>{
                                                        this.state.quyenSachs.map((quyensach) => {
                                                            return <option id={quyensach.id} value={quyensach.id} key={quyensach.id}> Năm Tái bản:{quyensach.namTaiBan} - Giá: {quyensach.gia}</option>
                                                        })
                                                    }</select>
                                                    </div>
                                                )
                                                : null
                                        }
                                        </>
                                        <button className='btn btn-primary' onClick={this.themQuyenSach}>Thêm quyển sách</button>
                                        </div>
                                        
                                    </div>
                                    <hr />
                                    <div>
                                        <h3 className="text-center">Thông tin chi tiết phiếu mượn</h3>
                                        <hr />
                                        
                                        <table className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Đầu sách</th>
                                                    <th>Năm Tái Bản</th>
                                                    <th>Giá</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <>
                                            {
                                            (this.state.sachMuons !== null) 
                                            ?
                                            (
                                            <tbody>
                                                {this.state.sachMuons.map(
                                                    sach =>
                                                        <tr key={sach.id}>
                                                            <td>{sach.tenDauSach}</td>
                                                            <td>{sach.namXuatBan}</td>
                                                            <td>{sach.gia}</td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-info">Xoá
                                                                </button>

                                                            </td>
                                                        </tr>
                                                )}
                                            </tbody>
                                            )
                                            :
                                            null}
                                            </>
                                        </table>
                                        
                                        <hr />

                                    </div>

                                </form>

                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.TaoPhieu}>Tạo Phiếu</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(DocGia_PhieuMuonCreate);
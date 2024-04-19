import React, { Component } from 'react';
import TacGiaServices from '../../Services/Admin/TacGiaServices';
import TaiKhoanServices from '../../Services/Admin/TaiKhoanServices';
import DocGiaServices from '../../Services/DocGia/DocGiaServices';
import { withRouter } from '../../withRouter';

class TaiKhoanDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            taikhoan: [],
            docgia: [],
            nhanvien:[]
        }

    }
    componentDidMount() {
        TaiKhoanServices.getOne(this.state.id).then(res => {
            this.setState({ taikhoan: res.data });

        });
        if (this.state.taikhoan.phanLoaiTaiKhoan === "DOCGIA") {
            TaiKhoanServices.getDocGia(this.state.id).then(res => {
                this.setState({ docgia: res.data });
                console.log(this.state.docgia);
            })
        }
        else {
            TaiKhoanServices.getNhanVien(this.state.id).then(res => {
                this.setState({ nhanvien: res.data });
                console.log(this.state.nhanvien);
            })
        }
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-sm-2">
                        <a href="/admin/taikhoan" >Quay về trang Tài Khoản</a>
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className="card col-sm-6">
                            <div className="card-body ">
                                <h5 className='text-center'>Thông tin tài khoản</h5>
                                <hr />
                                <form>
                                    <div className="form-group">
                                        <label>Tên Đăng Nhập:</label>
                                        <input className="form-control"
                                            value={this.state.taikhoan.tenDangNhap} readOnly={true} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mật Khẩu:</label>
                                        <input className="form-control"
                                            value={this.state.taikhoan.matKhau} readOnly={true} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phân loại tài khoản:</label>
                                        <input className="form-control"
                                            value={this.state.taikhoan.phanLoaiTaiKhoan} readOnly={true} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card col-sm-6">

                            {
                                (this.state.nhanvien != null)
                                    ?
                                    (
                                        <div className="card-body ">
                                            <h5 className='text-center'>Thông tin Nhân viên</h5>
                                            <hr />
                                            <form>
                                                <div className="form-group">
                                                    <label>Tên Nhân Viên:</label>
                                                    <input className="form-control"
                                                        value={this.state.nhanvien.tenNV} readOnly={true} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email:</label>
                                                    <input className="form-control"
                                                        value={this.state.nhanvien.email} readOnly={true} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Ngày Sinh:</label>
                                                    <input className="form-control"
                                                        value={this.state.nhanvien.ngaySinh} readOnly={true} />
                                                </div>
                                                <div className="form-group">
                                                    <label>SDT:</label>
                                                    <input className="form-control"
                                                        value={this.state.nhanvien.sdt} readOnly={true} />
                                                </div>
                                            </form>
                                        </div>
                                    )
                                    :
                                    (<div className="card-body ">
                                        <h5 className='text-center'>Thông tin Đọc giả</h5>
                                        <hr />
                                        <form>
                                            <div className="form-group">
                                                <label>Tên Đọc Giả:</label>
                                                <input className="form-control"
                                                    value={this.state.docgia.tenDocGia} readOnly={true} />
                                            </div>
                                            <div className="form-group">
                                                <label>Ngày Sinh:</label>
                                                <input className="form-control"
                                                    value={this.state.docgia.ngaySinh} readOnly={true} />
                                            </div>
                                            <div className="form-group">
                                                <label>Email:</label>
                                                <input className="form-control"
                                                    value={this.state.docgia.email} readOnly={true} />
                                            </div>
                                            <div className="form-group">
                                                <label>SDT:</label>
                                                <input className="form-control"
                                                    value={this.state.docgia.sdt} readOnly={true} />
                                            </div>
                                        </form>
                                    </div>
                                    )
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TaiKhoanDetail);
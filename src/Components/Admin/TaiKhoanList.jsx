import React, { Component } from 'react';
import TaiKhoanServices from '../../Services/Admin/TaiKhoanServices';
import { withRouter } from '../../withRouter';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
class TaiKhoanList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taikhoans: []
        }
        this.dangXuat = this.dangXuat.bind(this);
        
    }
    dangXuat = (e) => {
        localStorage.removeItem('Authorization');
        this.props.navigate("/home")
    }
    componentDidMount() {
        TaiKhoanServices.getAll().then(res => {
            console.log(res.data);
            this.setState({ taikhoans: res.data });
        })
    }
    
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <ul className="nav flex-column navbar-expand-sm bg-dark navbar-light">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => this.props.navigate("/admin")}>Xem Thông Tin Các Đầu Sách</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.navigate("/admin/nxb")}>Xem thông tin nhà xuất bản</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.navigate("/admin/taikhoan")}>Xem Thông tin Tài khoản</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.dangXuat}>Đăng Xuất</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-8'>
                        <h3 className='text-center'>Các tài khoản</h3>
                        <hr />
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Tên Đăng Nhập</th>
                                    <th>Phân loại tài khoản</th>
                                    <th>Tình Trạng</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.taikhoans.map(
                                        taikhoan =>
                                        ( (taikhoan.tinhTrang===1)
                                        ?
                                        (
                                            <tr key={taikhoan.maTK}>
                                                <td>{taikhoan.tenDangNhap}</td>
                                                <td>{taikhoan.phanLoaiTaiKhoan}</td>
                                                <td>Đang Hoạt Động</td>
                                                <td>
                                                <button onClick={() => this.props.navigate(`/admin/taikhoan/${taikhoan.maTK}`) }
                                                            className="btn btn-danger">Chi Tiết
                                                        </button>
                                                </td>
                                            </tr>)
                                            :
                                            (
                                                <tr key={taikhoan.maTK}>
                                                    <td>{taikhoan.tenDangNhap}</td>
                                                    <td>{taikhoan.phanLoaiTaiKhoan}</td>
                                                    <td>Hạn Chế Hoạt Động</td>
                                                    <td>
                                                        <button onClick={() => this.props.navigate(`/admin/taikhoan/${taikhoan.maTK}`) }
                                                            className="btn btn-danger">Chi Tiết
                                                        </button>
                                                    </td>
                                                </tr>)
                                        )
                                            
                                    )
                                }
                            </tbody>
                        </table>
                       
                    </div>
                </div>

            </div>

        );
    }
}

export default withRouter(TaiKhoanList);
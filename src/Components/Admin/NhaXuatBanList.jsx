import React, { Component } from 'react';
import NhaXuatBanServices from '../../Services/Admin/NhaXuatBanServices';
import { withRouter } from '../../withRouter';
class NhaXuatBanList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nxbs: []
        }
        this.deleteNXB = this.deleteNXB.bind(this);
        
    }
    componentDidMount() {
        NhaXuatBanServices.getAll().then(res => {
            this.setState({ nxbs: res.data });
            console.log(this.state.nxbs);
        });
    }
    deleteNXB(id) {
        NhaXuatBanServices.delete(id);
        window.location.reload();
    }
    
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-sm-3'>
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
                        </ul>
                    </div>
                    <div className='col-sm-9'>
                        <h3 className='text-center'>Nhà xuất bản</h3>
                        <hr />
                        <button onClick={() => this.props.navigate("/admin/nxb/create")}
                            className="btn btn-info">Thêm NXB
                        </button>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Tên NXB</th>
                                    <th>Địa chỉ</th>
                                    <th>Email</th>
                                    <th>SDT</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.nxbs.map(
                                        nxb =>
                                            <tr key={nxb.id}>
                                                <td>{nxb.tenNXB}</td>
                                                <td>{nxb.diaChi}</td>
                                                <td>{nxb.email}</td>
                                                <td>{nxb.sdt}</td>
                                                <td>
                                                <button onClick={() => this.props.navigate(`/admin/nxb/${nxb.id}`)}
                                                        className="btn btn-success">Sửa
                                                    </button>
                                                    <button onClick={() => this.deleteNXB(nxb.id)}
                                                        className="btn btn-danger">Xoá
                                                    </button>
                                                </td>
                                            </tr>
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

export default withRouter(NhaXuatBanList);
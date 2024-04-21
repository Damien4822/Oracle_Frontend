import React, { Component } from 'react';
import DocGiaServices from '../../Services/DocGia/DocGiaServices';
import PhieuMuonServices from '../../Services/DocGia/PhieuMuonServices';
import { withRouter } from '../../withRouter';

class DocGia_PhieuMuon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            phieumuons: []
        }
        this.dangXuat=this.dangXuat.bind(this);
    }
    dangXuat ()
    {
        localStorage.removeItem('Authorization');
        this.props.navigate("/home");
    }
    componentDidMount() {
        if(localStorage.getItem('Authorization')!==null)
        
        {

            DocGiaServices.getInfo(localStorage.getItem('name')).then(res => {
                this.setState({ id: parseInt(res.data.id) });
                localStorage.setItem('id', res.data.id);
            })
            console.log(this.state.docGia);
            PhieuMuonServices.getAllPhieuMuonByDocGiaId(localStorage.getItem('id')).then(res => {
                this.setState({ phieumuons: res.data });
                console.log(res.data)
            });
        }
        else this.props.navigate("/login");
       
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <ul className="nav flex-column navbar-expand-sm bg-dark navbar-light">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => this.props.navigate("/docgia")}>Xem Thông Tin Đọc Giả</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.navigate("/docgia/phieumuon")}>Xem thông tin phiếu mượn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.navigate("/docgia/thedocgia")}>Xem Thông tin thẻ đọc giả</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.dangXuat}>Đăng Xuất</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-8'>
                        <div className="container">
                            <div className='row'>
                                <div className="col-sm-3">
                                    <button className='btn btn-primary' onClick={()=>this.props.navigate("/docgia/phieumuon/create")} >Tạo Phiếu Mượn</button>
                                </div>
                            </div>
                            <h3 className="text-center">Thông tin các phiếu mượn</h3>
                            <div>
                                <div className="row">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Ngày Lập Phiếu</th>
                                                <th>Ngày mượn</th>
                                                <th>Ngày Trả</th>
                                                <th>Tổng số tiền</th>
                                                <th>Tình Trạng Phiếu</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.phieumuons.map(
                                                    phieumuon =>
                                                        <tr key={phieumuon.id}>
                                                            <td>{phieumuon.ngayLap}</td>
                                                            <td>{phieumuon.ngayMuon}</td>
                                                            <td>{phieumuon.ngayTra}</td>
                                                            <td>{phieumuon.tongTien}</td>
                                                            {
                                                                (phieumuon.tinhTrangPhieu) ?
                                                                     <td>Đã trả sách</td>:
                                                                    <td>Chưa trả sách</td>
                                                            }
                                                            <td>
                                                                <button onClick={() => this.props.navigate(`/docgia/phieumuon/${phieumuon.id}/chitiet`)}
                                                                    className="btn btn-info">Chi Tiết
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
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(DocGia_PhieuMuon);
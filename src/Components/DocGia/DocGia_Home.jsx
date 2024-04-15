import { Button } from 'bootstrap';
import React, { Component } from 'react';
import DocGiaServices from '../../Services/DocGia/DocGiaServices';
import { withRouter } from '../../withRouter';

class DocGia_Home extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            tenDocGia: '',
            ngaySinh: '',
            email: '',
            avatar: '',
            hinhAnhMinhChung: '',
            sdt: '',
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNgaySinhHandler = this.changeNgaySinhHandler.bind(this);
        this.changeSDTHandler = this.changeSDTHandler.bind(this);
        this.changeTenDocGiaHandler = this.changeTenDocGiaHandler.bind(this);
        this.updateDocGia = this.updateDocGia.bind(this);
    }
    componentDidMount() {
        {
            DocGiaServices.getInfo(localStorage.getItem('name')).then(res => {
                let docgia = res.data;
                this.setState({ taikhoan: docgia.taiKhoan })
                this.setState({ tenDocGia: docgia.tenDocGia });
                this.setState({ email: docgia.email });
                this.setState({ sdt: docgia.sdt });
                this.setState({ ngaySinh: docgia.ngaySinh });
                this.setState({ id: docgia.id });
            })
        }
    }
    updateDocGia = (event) => {
        let update;
        update = {
            id: this.state.id, tenDocGia: this.state.tenDocGia,
            ngaySinh: this.state.ngaySinh, email: this.state.email,
            //avatar: this.state.avatar, hinhAnhMinhChung: this.state.hinhAnhMinhChung,
            sdt: this.state.sdt
        }
        console.log(JSON.stringify(update));
        DocGiaServices.update(update).then((res) => {
            window.location.reload();
        });
    }


    changeEmailHandler = (e) => {
        this.setState({ email: e.target.value })
    }
    changeNgaySinhHandler = (e) => {
        this.setState({ ngaySinh: e.target.value })
    }
    changeSDTHandler = (e) => {
        this.setState({ SDT: e.target.value })

    }
    changeTenDocGiaHandler = (e) => {
        this.setState({ tenDocGia: e.target.value })
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
                                <a className="nav-link" href="#">Xem Thông tin thẻ đọc giả</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-8'>
                        <div className="container">
                            <h3 className="text-center">Thông tin đọc giả</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Tên Đọc Giả</label>
                                        <input name=" tenDocGia" className="form-control"
                                            value={this.state.tenDocGia} onChange={this.changeTenDocGiaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Ngày Sinh</label>
                                        <input name="ngaySinh" className="form-control"
                                            value={this.state.ngaySinh} onChange={this.changeNgaySinhHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>SDT</label>
                                        <input name="SDT" className="form-control"
                                            value={this.state.sdt} onChange={this.changeSDTHandler} />
                                    </div>
                                </form>
                                <button className="btn btn-primary" onClick={this.updateDocGia}>Lưu thông tin đọc giả</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(DocGia_Home);
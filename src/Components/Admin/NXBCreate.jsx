import React, { Component } from 'react';
import NhaXuatBanServices from '../../Services/Admin/NhaXuatBanServices';
import { withRouter } from '../../withRouter';

class NXBCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenNXB: '',
            diaChi: '',
            email: '',
            sdt: ''
        }
        this.changeDiaChi=this.changeDiaChi.bind(this);
        this.changeTenNXB=this.changeTenNXB.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changeSDT=this.changeSDT.bind(this);
        this.createNXB=this.createNXB.bind(this);
    }
    changeDiaChi = (event) => {
        this.setState({ diaChi: event.target.value});
    };
    changeTenNXB = (event) => {
        this.setState({ tenNXB: event.target.value});
    };
    changeEmail = (event) => {
        this.setState({ email: event.target.value});
    };
    changeSDT = (event) => {
        this.setState({ sdt: event.target.value});
    };
    createNXB = (event)=>{
        let nxb={tenNXB:this.state.tenNXB,
            diaChi:this.state.diaChi,
            email:this.state.email,
            sdt:this.state.sdt
        }
        console.log(nxb);
        NhaXuatBanServices.create(nxb).then(res =>
            this.props.navigate("/admin/nxb")
        )
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className="card col-sm-12">
                            <div className="card-body ">
                                <h2 className='text-center'>Thông tin NXB</h2>
                                <form>
                                    <div className="form-group">
                                        <label>Tên Nhà Xuất Bản:</label>
                                        <input className="form-control"
                                            value={this.state.tenNXB} onChange={this.changeTenNXB} />
                                    </div>
                                    <div className="form-group">
                                        <label>Địa Chỉ:</label>
                                        <input className="form-control"
                                            value={this.state.diaChi} onChange={this.changeDiaChi} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input className="form-control"
                                            value={this.state.email} onChange={this.changeEmail} />
                                    </div>
                                    <div className="form-group">
                                        <label>SDT:</label>
                                        <input className="form-control"
                                            value={this.state.sdt} onChange={this.changeSDT} />
                                    </div>
                                </form>
                                <button className='btn btn-success' onClick={this.createNXB} >Lưu thông tin tác giả</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(NXBCreate);
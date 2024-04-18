import React, { Component } from 'react';
import NhaXuatBanServices from '../../Services/Admin/NhaXuatBanServices';
import { withRouter } from '../../withRouter';

class NXBDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.params.id,
            tenNXB: '',
            diaChi: '',
            Email: '',
            SDT:'',
            
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
        let nxb={id:this.state.id,
            tenNXB:this.state.tenNXB,
            diaChi:this.state.diaChi,
            email:this.state.Email,
            sdt:this.state.SDT
        }
        console.log(nxb);
        NhaXuatBanServices.create(nxb).then(res =>
            this.props.navigate("/admin/nxb")
        )
    }
    componentDidMount()
    {
        NhaXuatBanServices.getOne(this.state.id).then( res=>
            {
                console.log(res.data);
                this.setState({tenNXB:res.data.tenNXB});
                this.setState({diaChi:res.data.diaChi});
                this.setState({Email:res.data.email});   
                console.log(this.state.Email);
                this.setState({SDT:res.data.sdt});
                console.log(this.state.SDT);
                
            })
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
                                        value={this.state.Email} onChange={this.changeEmail} />
                                </div>
                                <div className="form-group">
                                    <label>SDT:</label>
                                    <input className="form-control"
                                        value={this.state.SDT} onChange={this.changeSDT} />
                                </div>
                            </form>
                            <button className='btn btn-success' onClick={this.createNXB} >Lưu thông tin NXB</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(NXBDetail);
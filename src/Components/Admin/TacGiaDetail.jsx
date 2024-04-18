import React, { Component } from 'react';
import TacGiaServices from '../../Services/Admin/TacGiaServices';

import { withRouter } from '../../withRouter';

class TacGia_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            tenTacGia: '',
            namSinh: '',
            namMat: '',
            dauSachs: []
        }
        this.changeTenTacGia=this.changeTenTacGia.bind(this);
        this.changeNamSinh=this.changeNamSinh.bind(this);
        this.changeNamMat=this.changeNamMat.bind(this);
        this.updateTacGia=this.updateTacGia.bind(this);
    }
    componentDidMount() {
        TacGiaServices.getOne(this.state.id).then(res => {
            let tacgia = res.data;
            this.setState({ tenTacGia: tacgia.tenTacGia, namSinh: tacgia.namSinh, namMat: tacgia.namMat })
            this.setState({ dauSachs: tacgia.dauSachList })
            console.log(this.state);
        });
    }
    changeTenTacGia = (event) => {
        this.setState({tenTacGia: event.target.value});
    };
    changeNamSinh = (event) => {
        this.setState({namSinh: event.target.value});
    };
    changeNamMat = (event) => {
        this.setState({namMat: event.target.value});
    };
    updateTacGia = (event) => {
        event.preventDefault();
        let tacgia = {id: this.state.id,
                tenTacGia: this.state.tenTacGia,
                    namSinh:this.state.namSinh,
                    namMat:this.state.namMat}
            console.log(tacgia);
            TacGiaServices.update(tacgia).then((res) => {
                window.location.reload();
            });
    };
    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-sm-2">
                        <a href="/admin/" >Quay về trang Home</a>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className="card col-sm-6">
                            <div className="card-body ">
                                <form>
                                    <div className="form-group">
                                        <label>Tên Tác Giả:</label>
                                        <input className="form-control"
                                            value={this.state.tenTacGia} onChange={this.changeTenTacGia} />
                                    </div>
                                    <div className="form-group">
                                        <label>Năm Sinh:</label>
                                        <input className="form-control"
                                            value={this.state.namSinh} onChange={this.changeNamSinh} />
                                    </div>
                                    <div className="form-group">
                                        <label>Năm Mất:</label>
                                        <input className="form-control"
                                            value={this.state.namMat} onChange={this.changeNamMat} />
                                    </div>
                                </form>
                                <button className='btn btn-success' onClick={this.updateTacGia} >Lưu thông tin tác giả</button>
                            </div>
                        </div>
                        <div className="card col-sm-6">
                            <h6> đây là phần danh sách các đầu sách của tác giả</h6>
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Tên Đầu Sách</th>
                                        <th>Năm Xuất Bản</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.dauSachs.map(
                                            dauSach =>
                                                <tr key={dauSach.id}>
                                                    <td>{dauSach.tenDauSach}</td>
                                                    <td>{dauSach.namXuatBan}</td>
                                                    <td>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <h3 className='text-decoration-underline'>Thông tin tác giả</h3>
                <h5> Có thể bổ sung sau</h5>
            </div>
        );
    }
}

export default withRouter(TacGia_Detail);
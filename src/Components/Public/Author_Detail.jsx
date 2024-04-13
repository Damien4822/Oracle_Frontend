import React, { Component } from 'react';
import AuthorServices from '../../Services/Public/AuthorServices';
import { withRouter } from '../../withRouter';

class Author_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            tenTacGia: '',
            namSinh: '',
            namMat: '',
            dauSachs: []
        }
    }
    componentDidMount() {
        AuthorServices.getOne(this.state.id).then(res => {
            let tacgia = res.data;
            this.setState({ tenTacGia: tacgia.tenTacGia, namSinh: tacgia.namSinh, namMat: tacgia.namMat })
            this.setState({ dauSachs: tacgia.dauSachList })
            console.log(this.state);
        });
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-sm-2">
                        <a href="/home" >Quay về trang Home</a>
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
                                            value={this.state.tenTacGia} readOnly={true} />
                                    </div>
                                    <div className="form-group">
                                        <label>Năm Sinh:</label>
                                        <input className="form-control"
                                            value={this.state.namSinh} readOnly={true} />
                                    </div>
                                    <div className="form-group">
                                        <label>Năm Mất:</label>
                                        <input className="form-control"
                                            value={this.state.namMat} readOnly={true} />
                                    </div>
                                </form>
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
                                                        <button
                                                            className="btn btn-info" onClick={() => this.props.navigate(`/public/book/${dauSach.id}`)}>Chi Tiết
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
                <h3 className='text-decoration-underline'>Thông tin tác giả</h3>
                <h5> Có thể bổ sung sau</h5>

            </div>
        );
    }
}

export default withRouter(Author_Detail);
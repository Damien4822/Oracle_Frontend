import React, { Component } from 'react';
import DauSachServices from '../../Services/Admin/DauSachServices';
import BookServices from '../../Services/Public/BookServices';
import { withRouter } from '../../withRouter';
class DauSachList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this.deleteBook=this.deleteBook.bind(this);
        this.dangXuat=this.dangXuat.bind(this);
    }
    componentDidMount() {
        if(localStorage.getItem('Authorization')!==null)
        {
        DauSachServices.getAllDauSach().then(res => {
            console.log(res.data);
            this.setState({ books: res.data })
        });}
        else
        this.props.navigate("/login")
    }
    dangXuat = (e) =>
    {
        localStorage.removeItem('Authorization');
        this.props.navigate("/home")
    }
    deleteBook(id){
       DauSachServices.deleteBook(id);
       window.location.reload();
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
                        <h3 className='text-center'>Các đầu sách</h3>
                        <hr/>
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
                                    this.state.books.map(
                                        book =>
                                            <tr key={book.id}>
                                                <td>{book.tenDauSach}</td>
                                                <td>{book.namXuatBan}</td>
                                                <td>
                                                    <button onClick={() => this.props.navigate(`/admin/book/${book.id}`)}
                                                        className="btn btn-info">Chi Tiết
                                                    </button>
                                                    <button onClick={()=>this.deleteBook(book.id)}
                                                        className="btn btn-danger">Xoá
                                                    </button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <button className='btn btn-primary'>Thêm sách mới</button>
                    </div>
                </div>

            </div>

        );
    }
}

export default withRouter(DauSachList);
import React, { Component } from 'react';
import { withRouter } from '../../withRouter';
import { } from 'bootstrap';
import BookServices from '../../Services/Public/BookServices';
import { jwtDecode } from 'jwt-decode';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }

    }
    componentDidMount() {
        BookServices.getAll().then(res => {
            console.log(res.data);
            this.setState({ books: res.data })
        });

    }
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" onClick={() => this.props.navigate("/home")}>Trang Chủ</a>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" onClick={() => this.props.navigate("/public/book/list")} >Đầu sách</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => this.props.navigate("/public/author/list")}>Tác giả</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menu </a>
                                    <>
                                        {localStorage.getItem('Authorization') == null
                                            ?
                                            
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                    <li><a className="dropdown-item" onClick={() => this.props.navigate("/login")} >Đăng nhập</a></li>
                                                    <li><a className="dropdown-item" onClick={() => this.props.navigate("/register")} >Đăng ký</a></li>
                                                    <li><a className="dropdown-item" >Navbar cho người chưa login</a></li>
                                                </ul>
                                            
                                            :
                                                (
                                                        (jwtDecode(localStorage.getItem('Authorization')).role=="[DOCGIA]")
                                                        ?
                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                                <li><a className="dropdown-item"onClick={()=> this.props.navigate("/docgia")} >Chuyển đến trang đọc giả</a></li>
                                                            </ul>
                                                        :
                                                            ((jwtDecode(localStorage.getItem('Authorization')).role=="[THUTHU]")
                                                            ?
                                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                                <li><a className="dropdown-item" >TNavbar cho thủ thư</a></li>
                                                            </ul>
                                                            :
                                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                                    <li><a className="dropdown-item" >Navbar cho admin</a></li>
                                                                </ul>)
                                                )
                                            }
                                    </>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <div className="row">
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
                                                    <button onClick={() => this.props.navigate(`/public/book/${book.id}`)}
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

        );
    }
}

export default withRouter(HomeComponent);
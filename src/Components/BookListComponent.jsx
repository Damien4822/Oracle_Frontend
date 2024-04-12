import React, { Component } from 'react';
import { withRouter } from '../withRouter';
import { } from 'bootstrap';
import BookServices from '../Services/BookServices';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }

    }
    componentDidMount() {
        if (localStorage.getItem('Authorization') == null) {
            this.props.navigate('/login');
            window.location.reload();
        }
        else {
            BookServices.getAll().then(res => {
                console.log(res.data);
                this.setState({books:res.data})
            });
        }
    }
    render() {
        return (
            <div>
                <h6>Đây là trang BookList</h6>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" onClick={() => this.props.navigate("/home")}>Trang Chủ</a>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" onClick={() => this.props.navigate("/book/list")} >Đầu sách</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => this.props.navigate("/author/list")}>Tác giả</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menu </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                <div>
                    <button className="btn btn-primary" onClick={this.Logout}>LogOut</button>
                </div>
                <h2 className="text-center">User List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                </div>
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
                                            <button onClick={() => this.props.navigate(`/book/${book.id}/detail`)}
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
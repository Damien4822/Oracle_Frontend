import React, { Component } from 'react';
import { } from 'bootstrap';
import { withRouter } from '../../withRouter';
class HomeComponent extends Component {
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
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" onClick={() => this.props.navigate("/login")} >Đăng nhập</a></li>
                                        <li><a className="dropdown-item" onClick={() => this.props.navigate("/register")} >Đăng ký</a></li>
                                        <li><a className="dropdown-item" >Thay đổi thông tin</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h3>Chả biết thêm gì</h3>
            </div>
        );
    }
}

export default withRouter(HomeComponent);
import React, { Component } from 'react';
import { withRouter } from '../withRouter';
import { } from 'bootstrap';
class HomeComponent extends Component {
    render() {
        return (
            <div>
                <h6>Đây là trang Home</h6>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" >Trang Chủ</a>
        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" >Đầu sách</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tác giả</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menu </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
            </div>
        );
    }
}

export default withRouter(HomeComponent);
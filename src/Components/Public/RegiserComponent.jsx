import React, {Component} from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticateService from '../../Services/Public/AuthenticateService';
import {withRouter} from '../../withRouter';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tenDangNhap: '',
            matKhau: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.Register = this.Register.bind(this);
        this.cancel= this.cancel.bind(this);
    }

    changeUsernameHandler = (e) => {
        this.setState({tenDangNhap: e.target.value})
    };
    changePasswordHandler = (e) => {
        this.setState({matKhau: e.target.value})
    };
    Register = (e) => {
        e.preventDefault();
        let user = {tenDangNhap: this.state.tenDangNhap, matKhau: this.state.matKhau};
        console.log('user =>' + JSON.stringify(user));
        AuthenticateService.register(user).then((res) => {
            console.log(res.data.token);
           
        })
    }
    cancel = (e) =>
    {
        this.props.navigate("/login");
    }
    render() {
        return (
            <div>
                <div className='row'>
                 <div className="col-sm-2">
                    <a href="/home" >Quay về trang Home</a>
                 </div>
                 </div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Register</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Tên Đăng Nhập</label>
                                        <input  name="tenDangNhap" className="form-control"
                                               value={this.state.tenDangNhap} onChange={this.changeUsernameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mật Khẩu</label>
                                        <input  name="matKhau" className="form-control"
                                               value={this.state.matKhau} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.Register}>Register</button>
                                    <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterComponent);
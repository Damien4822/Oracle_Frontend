
import React, {Component} from 'react';
import AuthenticateService from "../Services/AuthenticateService";
import { Navigate } from "react-router-dom";
import { withRouter } from '../withRouter';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tenDangNhap: '',
           matKhau: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.Login = this.Login.bind(this);
        this.Register= this.Register.bind(this);
        
    }
    
    changeUsernameHandler = (e) => {
        this.setState({tenDangNhap: e.target.value})
    };
    changePasswordHandler = (e) => {
        this.setState({matKhau: e.target.value})
    };
    Login = (e) => {
        e.preventDefault();
        let user = {tenDangNhap: this.state.tenDangNhap, matKhau: this.state.matKhau};
        console.log('user =>' + JSON.stringify(user));
        AuthenticateService.authenticate(user);
    }
    Register = (e) => {
      this.props.navigate("/register")
    }
   

    render() {
        return (
            <div>
                <div className="container">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Login</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Tên Đăng Nhập</label>
                                        <input  name=" tenDangNhap" className="form-control"
                                               value={this.state. tenDangNhap} onChange={this.changeUsernameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <input  name="matKhau" className="form-control"
                                               value={this.state.matKhau} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <div className="row-col-2  ">
                                            <button className="btn btn-success" onClick={this.Login}>Login</button>
                                            <button className="btn btn-success" onClick= {this.Register}>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default withRouter(LoginComponent);

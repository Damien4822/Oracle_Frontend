import React, { Component } from 'react';
import { withRouter } from '../../withRouter';

class DocGia_TheDocGia extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.dangXuat=this.dangXuat.bind(this);
    
    }
    dangXuat()
    {
        localStorage.removeItem('Authorization');
        this.props.navigate("/home");
    }
    render() {
        return (
           <div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <ul className="nav flex-column navbar-expand-sm bg-dark navbar-light">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => this.props.navigate("/docgia")}>Xem Thông Tin Đọc Giả</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.navigate("/docgia/phieumuon")}>Xem thông tin phiếu mượn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Xem Thông tin thẻ đọc giả</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.dangXuat}>Đăng Xuất</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default withRouter(DocGia_TheDocGia);
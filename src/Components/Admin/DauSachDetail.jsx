import React, { Component } from 'react';
import BookServices from '../../Services/Public/BookServices';
import { withRouter } from '../../withRouter';

class Book_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            tenDauSach: 'Tên Đầu sách:',
            namXuatBan: 'Năm xuất bản:',
            tacGiaList: [],
            quyenSachList: []
        }

    }
    componentDidMount() {
        BookServices.getOne(this.state.id).then(res => {
            console.log(res.data);
            let dauSach = res.data;
            this.setState({ namXuatBan: "Năm Xuất Bản: " + dauSach.namXuatBan })
            this.setState({ tenDauSach: "Tên Đầu Sách: " + dauSach.tenDauSach })
        });

        BookServices.getAllTacGia(this.state.id).then(res => {
            console.log(res.data);
            this.setState({ tacGiaList: res.data })
        });
        BookServices.getAllQuyenSach(this.state.id).then(res => {
            console.log(res.data)
            this.setState({ quyenSachList: res.data });
        });

    }
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
                        <div className='col-sm-6'>
                            <h3>{this.state.tenDauSach}</h3>
                            <p id='tacGia'>Tác giả:
                                {this.state.tacGiaList.map(
                                    tacgia =>
                                        <span className='underline' key={tacgia.id} onClick={() => this.props.navigate(`/admin/tacgia/${tacgia.id}`)}><u>{tacgia.tenTacGia}</u></span>
                                )}</p>
                            <p id='namXuatBan'>{this.state.namXuatBan}</p>
                        </div>
                        <div className='col-sm-6'>
                            <h5>Ảnh bìa sách: bổ sung sau</h5>
                        </div>
                    </div>
                    <h3 className='text-decoration-underline'>Thông tin mô tả sách</h3>
                    <h5> Có thể bổ sung sau</h5>
                    <h3 className='text-decoration-underline'>Thông tin các quyển sách</h3>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Năm Tái Bản</th>
                                    <th>Nhà Xuất Bản</th>
                                    <th>Tình Trạng Sách</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.quyenSachList.map(
                                        quyensach =>
                                            <tr key={quyensach.id}>
                                                <td>{quyensach.namTaiBan}</td>
                                                <td>{quyensach.nhaXuatBan.tenNXB}</td>
                                                <td>{quyensach.tinhTrangSach.moTa}</td>
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
        );
    }
}

export default withRouter(Book_Detail);
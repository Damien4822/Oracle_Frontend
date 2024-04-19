import React, { Component } from 'react';
import PhieuMuonServices from '../../Services/DocGia/PhieuMuonServices';
import { withRouter } from '../../withRouter';

class DocGia_CTPhieuMuon extends Component {
    constructor(props) {
        super(props);
        this.state={
            phieumuon_id:this.props.params.id,  
            ct:[],
           phieu:[] 
        }

    }
    componentDidMount(){
       
        PhieuMuonServices.getAllChiTietPhieuMuonByPhieuMuonId(this.state.phieumuon_id).then(res=>{
            console.log(res.data);
            this.setState({ctphieus:res.data});
        })
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-sm-2">
                        <a href="/docgia/phieumuon" >Quay về trang Phiếu Mượn</a>
                    </div>
                </div>
                <h1>Trang chi tiết phiếu mượn</h1>
                <div>
                                <div className="row">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Đầu sách:</th>
                                                <th>Số lượng</th>
                                                <th>thanhTien</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.ct.map(
                                                    ctphieu =>
                                                        <tr key={ctphieu.id}>
                                                            <td>{ctphieu.quyenSach.dauSach.tenDauSach}</td>
                                                            <td>{ctphieu.soLuong}</td>
                                                            <td>{ctphieu.thanhTien}</td>
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

export default withRouter( DocGia_CTPhieuMuon);
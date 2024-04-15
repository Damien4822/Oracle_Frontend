import React, { Component } from 'react';
import { withRouter } from '../../withRouter';

class DocGia_CTPhieuMuon extends Component {
    constructor(props) {
        super(props);
        this.state={
            phieumuon_id:this.props.params.id,
        }

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
            </div>
        );
    }
}

export default withRouter( DocGia_CTPhieuMuon);
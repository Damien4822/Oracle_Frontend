import React, { Component } from 'react';
import { withRouter } from '../../withRouter';

class DocGia_PhieuMuonCreate extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-sm-2">
                        <a href="/docgia/phieumuon" >Quay về trang Phiếu Mượn</a>
                    </div>
                </div>
                <div>
                    <h2> Đây là trang Phiếu mượn create</h2>
                </div>
            </div>
        );
    }
}

export default withRouter(DocGia_PhieuMuonCreate);
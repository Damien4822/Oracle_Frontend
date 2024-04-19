import React, { Component } from 'react';
import PhieuMuonServices from '../../Services/ThuThu/PhieuMuonServices';
import { withRouter } from '../../withRouter';

class PhieuMuonDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.params.id,
            phieu:[],
            chitiet:[]
        }
    }
    componentDidMount()
    {
        PhieuMuonServices.getOne(this.state.id).then(res => {
            console.log(res.data)   
            this.setState({phieu:res.data})
        });
        PhieuMuonServices.getAllChiTiet(this.state.id).then(res=>
            {
                console.log(res.data);
                this.setState({chitiet:res.data});
            })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default withRouter(PhieuMuonDetail);
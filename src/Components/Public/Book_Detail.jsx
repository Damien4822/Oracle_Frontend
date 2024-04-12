import React, { Component } from 'react';
import BookServices from '../../Services/Public/BookServices';
import { withRouter } from '../../withRouter';

class Book_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
        }

    }
    componentDidMount() {

        BookServices.getAllQuyenSach(this.state.id).then(res => {
            console.log(res.data);
           
        });
    }
    render() {
        return (
            <div>
                <h1>Đây là trang Book Detail</h1>
            </div>
        );
    }
}

export default withRouter( Book_Detail);
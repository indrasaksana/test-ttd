import React, { Component } from 'react'
import { connect } from 'react-redux';
import TableComponent from '../components/TableComponent';
import { deleteUserData, getUserList } from '../actions/userAction';

class HomeContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getUserList());
        this.props.dispatch(deleteUserData());
    }
    render() {
        return (
            <div>
                <TableComponent/>
            </div>
        )
    }
}

export default connect()(HomeContainer);
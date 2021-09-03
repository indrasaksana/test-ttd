import React from 'react';
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => ({
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  });
  const styleImg = {
    width: "20%"
  }
const DetailComponent = (props) => {
    return (
        <Table striped>
        <tbody>
          <tr>
            <td width="200">Nama</td>
            <td width="10">:</td>
            <td>{props.getUserDetail.name}</td>
          </tr>
          <tr>
            <td width="200">Quantity</td>
            <td width="10">:</td>
            <td>{props.getUserDetail.qty}</td>
          </tr>
          <tr>
            <td width="200">Picture</td>
            <td width="10">:</td>
            <td><img src={props.getUserDetail.picture} style={styleImg} alt=""></img></td>
          </tr>
          <tr>
            <td width="200">Expired Date</td>
            <td width="10">:</td>
            <td>{props.getUserDetail.expiredAt}</td>
          </tr>
          <tr>
            <td width="200">Is Active</td>
            <td width="10">:</td>
            <td ><input type="checkbox" checked={props.getUserDetail.isActive} /></td>
          </tr>
        </tbody>
      </Table>
    )
}

export default connect(mapStateToProps, null)(DetailComponent)

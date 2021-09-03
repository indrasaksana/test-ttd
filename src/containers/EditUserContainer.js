import React, { Component } from "react";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { Button, Col, Row } from "reactstrap";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { getUserDetail, putUserUpdate } from "../actions/userAction";
import swal from "sweetalert";

const text = {
  display: "flex",
  alignItems: "center",
};

const textTitle = {
  textAlign: "center",
};

const mapStateToProps = (state) => ({
  getResponDataUser: state.users.getResponDataUser,
  errorResponDataUser: state.users.errorResponDataUser,
});

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }
  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal(
          "Product Failed!",
          "Product " + this.props.getResponDataUser.name,
          "Error"
        );
      } else {
        swal(
          "Product Update!",
          "Product " + this.props.getResponDataUser.name,
          "success"
        );
      }
    }
    return (
      <Container>
        <Row>
          <Col md={4} style={text}>
            <BackComponent />
          </Col>
          <Col md={4}>
            <h1 style={textTitle}>Edit User</h1>
          </Col>
          <Col md={4}></Col>
        </Row>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);

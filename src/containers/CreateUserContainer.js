import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";
import { Button, Col, Row } from "reactstrap";

const mapStateToProps = (state) => ({
  getResponDataUser: state.users.getResponDataUser,
  errorResponDataUser: state.users.errorResponDataUser,
});

const text = {
  display: "flex",
  alignItems: "center",
};

const textTitle = {
    textAlign: "center",
  };

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
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
          "Product Created!",
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
            <h1 style={textTitle}>Create User</h1>
          </Col>
          <Col md={4}></Col>
        </Row>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);

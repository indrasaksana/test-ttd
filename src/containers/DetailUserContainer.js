import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getUserDetail } from "../actions/userAction";
import BackComponent from "../components/BackComponent";
import DetailComponent from "../components/DetailComponent";
import { Button, Col, Row } from "reactstrap";

const text = {
  display: "flex",
  alignItems: "center",
};

const textTitle = {
  textAlign: "center",
};

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col md={4} style={text}>
            <BackComponent />
          </Col>
          <Col md={4}>
            <h1 style={textTitle}>Detail User</h1>
          </Col>
          <Col md={4}></Col>
        </Row>
        <DetailComponent />
      </Container>
    );
  }
}

export default connect()(DetailUserContainer);

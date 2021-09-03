import React from "react";
import { Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const style = {
  justifyContent: "space-evenly",
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
};
const text = {
  textDecoration: "none",
};

const BackComponent = () => {
  return (
    <Row>
      <Col>
        <Link to="/" style={text}>
          <Button style={style}>
            <IoArrowBackOutline />
            Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;

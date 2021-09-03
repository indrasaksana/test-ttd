import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Col, Row, Label, Input, Button, Image } from "reactstrap";
import { reduxForm, Field } from "redux-form";
import UserValidations from "../validations/UserValidations";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>

    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const renderFieldImg = ({
  input,
  type,
  placeholder,
  label,
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>

    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        onChange={(e) => this.handleFile(e)}
      ></Input>
    </Col>
  </Row>
);

const mapStateToProps = (state) => ({
   initialValues: {
     name: state.users.getUserDetail.name,
     qty: state.users.getUserDetail.qty,
     picture: state.users.getUserDetail.picture,
     expiredAt: state.users.getUserDetail.expiredAt,
     isActive: state.users.getUserDetail.isActive,
   }
});

const btn = {
  paddingTop: "18px",
};


class FormComponent extends Component {
  handleFile(e){
    console.log(e.target.files, '');
    console.log(e.target.files[0], '');
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Nama :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="number"
                name="qty"
                component={renderField}
                label="Quantity :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="file"
                name="picture"
                component={renderFieldImg}
                label="Picture :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="date"
                name="expiredAt"
                component={renderField}
                label="Expired Date :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="checkbox"
                name="isActive"
                component={renderField}
                label="Is Active :"
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row style={btn}>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidations,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Form,
  FormText,
  FormGroup,
  Input,
  Container,
  Col,
  Row
} from 'reactstrap';

import { signUp } from '../../actions';
import '../../index.css';
import projectLogo from '../../images/project-logo.svg';
import projectLabel from '../../images/project-label.svg';

class UserSignUp extends React.Component {
  renderInput = formProps => {
    const { input, type, id, placeholder } = formProps;

    return (
      <div>
        <Input
          className="mt-2"
          {...input}
          type={type}
          id={id}
          placeholder={placeholder}
          required
        />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.signUp(formValues);
  };

  render() {
    return (
      <Container>
        <Row className="align-items-center" style={{ height: '100vh' }}>
          <Col md={{ size: 4, offset: 4 }} className="mt-auto">
            <img
              className="img-fluid mx-auto d-block"
              src={projectLogo}
              style={{ width: '70%' }}
            />
            <img
              className="img-fluid mx-auto d-block"
              src={projectLabel}
              style={{ width: '60%' }}
            />
          </Col>
          <Col md={{ size: 6, offset: 3 }} className="mb-auto mt-5">
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <FormGroup className="d-xl-flex justify-content-xl-around">
                <Field
                  type="text"
                  name="name"
                  id="userName"
                  placeholder="Name"
                  component={this.renderInput}
                />
                <Field
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="Email Address"
                  component={this.renderInput}
                />
              </FormGroup>
              <FormGroup className="d-xl-flex justify-content-xl-around">
                <Field
                  type="password"
                  name="password"
                  id="userPassword"
                  placeholder="Password"
                  component={this.renderInput}
                />
                <Field
                  type="password"
                  name="confirmPassword"
                  id="userConfirmPassword"
                  placeholder="Confirm Password"
                  component={this.renderInput}
                />
              </FormGroup>
              <div className="text-center mt-2">
                <Button color="primary" size="sm">
                  Sign Up
                </Button>
              </div>
              <FormText color="secondary" className="text-center">
                Already have an account?{' '}
                <Link to="/" className="text-secondary">
                  Log In
                </Link>
              </FormText>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const formWrapped = reduxForm({
  form: 'UserSignUp'
})(UserSignUp);

export default connect(null, { signUp })(formWrapped);

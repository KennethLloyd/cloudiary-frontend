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

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { logIn, hideError } from '../../actions';
import '../../index.css';
import projectLogo from '../../images/project-logo.svg';
import projectLabel from '../../images/project-label.svg';

class UserLogIn extends React.Component {
  renderInput = formProps => {
    const { input, type, id, placeholder } = formProps;

    return (
      <div>
        <Input
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
    this.props.logIn(formValues);
  };

  toastError = () => {
    const toastId = 'logInErrorToast';

    if (this.props.errors.error !== null) {
      toast(this.props.errors.error, {
        toastId,
        position: 'top-right',
        type: 'error',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }

    this.props.hideError();
  };

  render() {
    return (
      <Container>
        <div>{this.toastError()}</div>
        <Row className="align-items-center" style={{ height: '100vh' }}>
          <Col md={{ size: 4, offset: 4 }}>
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
            <Form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="mt-5"
            >
              <FormGroup>
                <Field
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="Email Address"
                  component={this.renderInput}
                />
              </FormGroup>
              <FormGroup>
                <Field
                  type="password"
                  name="password"
                  id="userPassword"
                  placeholder="Password"
                  component={this.renderInput}
                />
              </FormGroup>
              <FormText color="secondary" className="text-right">
                <Link to="/forgot-password" className="text-secondary">
                  Forgot password?
                </Link>
              </FormText>
              <div className="text-center mt-2">
                <Button color="primary" size="sm">
                  Log In
                </Button>
              </div>
              <FormText color="secondary" className="text-center">
                Don't have an account?{' '}
                <Link to="/sign-up" className="text-secondary">
                  Sign Up
                </Link>
              </FormText>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { errors: state.errors };
};

const formWrapped = reduxForm({
  form: 'UserLogIn'
})(UserLogIn);

export default connect(mapStateToProps, { logIn, hideError })(formWrapped);

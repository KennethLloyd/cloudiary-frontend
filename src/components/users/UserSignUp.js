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
  Row,
} from 'reactstrap';

import { signUp } from '../../actions/userActions';
import '../../index.scss';
import projectLogo from '../../images/project-logo.svg';
import projectLabel from '../../images/project-label.svg';
import passwordShown from '../../images/password-shown.svg';
import passwordHidden from '../../images/password-hidden.svg';

class UserSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password',
      eyeIcon: passwordHidden,
    };
  }

  togglePasswordVisibility = () => {
    if (this.state.passwordType === 'password') {
      this.setState({
        passwordType: 'text',
        eyeIcon: passwordShown,
      });
    } else {
      this.setState({
        passwordType: 'password',
        eyeIcon: passwordHidden,
      });
    }
  };

  renderInput = (formProps) => {
    const { input, type, id, placeholder, meta } = formProps;
    const hasError = meta.touched && meta.error;
    const className = `${hasError ? 'border border-danger' : ''}`;

    return (
      <div>
        <span className="position-relative d-flex flex-column justify-content-center">
          {id === 'userPassword' ? (
            <img
              onClick={() => this.togglePasswordVisibility()}
              src={this.state.eyeIcon}
              className="position-absolute eye-icon align-self-end"
              alt="Password visibility icon"
              width="25"
              height="20"
            />
          ) : (
            ''
          )}
          <Input
            className={className}
            {...input}
            type={type}
            id={id}
            placeholder={placeholder}
            required
          />
        </span>
        <FormText color="danger">{hasError ? meta.error : ''}</FormText>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.signUp(formValues);
  };

  render() {
    return (
      <div className="bg-primary">
        <Container>
          <Row className="align-items-center" style={{ height: '100vh' }}>
            <Col md={{ size: 4, offset: 4 }} className="mt-auto">
              <img
                className="img-fluid mx-auto d-block"
                src={projectLogo}
                alt="project logo"
                style={{ width: '70%' }}
              />
              <img
                className="img-fluid mx-auto d-block"
                src={projectLabel}
                alt="project label"
                style={{ width: '60%' }}
              />
            </Col>
            <Col md={{ size: 6, offset: 3 }} className="mb-auto mt-5">
              <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <FormGroup className="d-xl-flex justify-content-xl-around">
                  <Field
                    type="text"
                    name="firstName"
                    id="userFirstName"
                    placeholder="First Name"
                    component={this.renderInput}
                  />
                  <Field
                    type="text"
                    name="lastName"
                    id="userLastName"
                    placeholder="Last Name"
                    component={this.renderInput}
                  />
                </FormGroup>
                <FormGroup className="d-xl-flex justify-content-xl-around">
                  <Field
                    type="email"
                    name="email"
                    id="userEmail"
                    placeholder="Email Address"
                    component={this.renderInput}
                  />
                  <Field
                    type={this.state.passwordType}
                    name="password"
                    id="userPassword"
                    placeholder="Password"
                    component={this.renderInput}
                  />
                </FormGroup>
                <div className="text-center mt-2">
                  <Button size="sm">Sign Up</Button>
                </div>
                <FormText color="light" className="text-center">
                  Already have an account?{' '}
                  <Link to="/login" className="text-dark">
                    Log In
                  </Link>
                </FormText>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (values.password && values.password.length < 8) {
    errors.password = 'Password is too short';
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords did not match';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'UserSignUp',
  validate,
})(UserSignUp);

export default connect(null, { signUp })(formWrapped);

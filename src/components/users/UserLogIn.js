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

import { logIn } from '../../actions/userActions';
import '../../index.scss';
import projectLogo from '../../images/project-logo.svg';
import projectLabel from '../../images/project-label.svg';
import passwordShown from '../../images/password-shown.svg';
import passwordHidden from '../../images/password-hidden.svg';

class UserLogIn extends React.Component {
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
    const { input, type, id, placeholder } = formProps;

    return (
      <div className="position-relative d-flex flex-column justify-content-center">
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
          {...input}
          type={type}
          id={id}
          placeholder={placeholder}
          required
        />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.logIn(formValues);
  };

  render() {
    return (
      <div className="landing-page">
        <Container>
          <Row className="align-items-center" style={{ height: '100vh' }}>
            <Col md={{ size: 4, offset: 4 }}>
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
                    type={this.state.passwordType}
                    name="password"
                    id="userPassword"
                    placeholder="Password"
                    component={this.renderInput}
                  />
                </FormGroup>
                <FormText className="text-right">
                  <Link to="/forgot-password" className="text-light">
                    Forgot password?
                  </Link>
                </FormText>
                <div className="text-center mt-2">
                  <Button size="sm">Log In</Button>
                </div>
                <FormText color="light" className="text-center">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-dark">
                    Sign Up
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

const formWrapped = reduxForm({
  form: 'UserLogIn',
})(UserLogIn);

export default connect(null, { logIn })(formWrapped);

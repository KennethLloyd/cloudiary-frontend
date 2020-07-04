import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormText,
  FormGroup,
  Input,
  Container,
  Col,
  Row,
  Alert,
} from 'reactstrap';

import { signUp } from '../../actions/userActions';
import { clearErrors } from '../../actions/errorActions';
import projectLogo from '../../images/project-logo.svg';
import projectLabel from '../../images/project-label.svg';
import passwordShown from '../../images/password-shown.svg';
import passwordHidden from '../../images/password-hidden.svg';

const UserSignUp = (props) => {
  const [passwordType, setPasswordType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(passwordHidden);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setEyeIcon(passwordShown);
    } else {
      setPasswordType('password');
      setEyeIcon(passwordHidden);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formValues = {
      email,
      password,
      firstName,
      lastName,
    };

    props.signUp(formValues);
  };

  const onAlertDismiss = () => {
    dispatch(clearErrors());
  };

  return (
    <div className="landing-page">
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
            <Form onSubmit={(e) => onSubmit(e)}>
              <Alert
                color="danger"
                isOpen={props.hasError}
                toggle={onAlertDismiss}
              >
                {props.error}
              </Alert>
              <FormGroup className="d-md-flex justify-content-md-center">
                <div className="position-relative d-flex flex-column justify-content-center mr-auto sign-up-field">
                  <Input
                    type="text"
                    name="firstName"
                    id="userFirstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="position-relative d-flex flex-column justify-content-center ml-auto sign-up-field">
                  <Input
                    type="text"
                    name="lastName"
                    id="userLastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </FormGroup>
              <FormGroup className="d-md-flex justify-content-md-center">
                <div className="position-relative d-flex flex-column justify-content-center mr-auto sign-up-field">
                  <Input
                    type="email"
                    name="email"
                    id="userEmail"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="position-relative d-flex flex-column justify-content-center ml-auto sign-up-field">
                  <img
                    onClick={() => togglePasswordVisibility()}
                    src={eyeIcon}
                    className="position-absolute eye-icon align-self-end"
                    alt="Password visibility icon"
                    width="25"
                    height="20"
                  />
                  <Input
                    type={passwordType}
                    name="password"
                    id="userPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </FormGroup>
              <div className="text-center mt-2">
                <Button color="primary" size="sm">
                  Sign Up
                </Button>
              </div>
              <FormText className="text-center landing-questions">
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
};

const mapStateToProps = (state) => {
  return {
    error: state.errors.error,
    hasError: state.errors.isOpen,
  };
};

export default connect(mapStateToProps, { signUp })(UserSignUp);

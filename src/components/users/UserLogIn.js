import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
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
  Alert,
} from 'reactstrap';

import { logIn } from '../../actions/userActions';
import { clearErrors } from '../../actions/errorActions';
import projectLogo from '../../images/project-logo.svg';
import projectLabel from '../../images/project-label.svg';
import passwordShown from '../../images/password-shown.svg';
import passwordHidden from '../../images/password-hidden.svg';

const UserLogIn = (props) => {
  const [passwordType, setPasswordType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(passwordHidden);
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
    };

    props.logIn(formValues);
  };

  const onAlertDismiss = () => {
    dispatch(clearErrors());
  };

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
            <Form onSubmit={(e) => onSubmit(e)} className="mt-5">
              <Alert
                color="danger"
                isOpen={props.hasError}
                toggle={onAlertDismiss}
              >
                {props.error}
              </Alert>
              <FormGroup>
                <div className="position-relative d-flex flex-column justify-content-center">
                  <Input
                    type="email"
                    name="email"
                    id="userEmail"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <div className="position-relative d-flex flex-column justify-content-center">
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
};

const mapStateToProps = (state) => {
  return {
    error: state.errors.error,
    hasError: state.errors.isOpen,
  };
};

export default connect(mapStateToProps, { logIn })(UserLogIn);

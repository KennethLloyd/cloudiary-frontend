import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';

import { logIn } from '../../actions';

class UserLogIn extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = formProps => {
    console.log(formProps);
    const { input, meta, type, id, placeholder } = formProps;

    return (
      <div>
        <Input {...input} type={type} id={id} placeholder={placeholder} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.props.logIn(formValues);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
          <Button>Log In</Button>
        </Form>
      </Container>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.email) {
    errors.title = 'You must enter an email';
  }
  if (!formValues.password) {
    errors.password = 'You must enter a password';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'UserLogin',
  validate,
})(UserLogIn);

export default connect(null, { logIn })(formWrapped);

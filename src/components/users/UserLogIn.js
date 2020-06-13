import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import { Field, reduxForm } from 'redux-form';

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

  renderInput = (formProps) => {
    const { input, label, meta } = formProps;
    //const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.logIn(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="email"
          component={this.renderInput}
          label="Email Address: "
        />
        <Field
          name="password"
          component={this.renderInput}
          label="Password: "
        />
        <button>Log In</button>
      </form>
    );
  }
}

const validate = (formValues) => {
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
  form: 'userLogin',
  validate,
})(UserLogIn);

export default connect(null, { logIn })(formWrapped);

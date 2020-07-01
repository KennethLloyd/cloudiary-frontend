import React from 'react';
import { Router, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import UserSignUp from './users/UserSignUp';
import UserLogIn from './users/UserLogIn';
import HomePage from './home/HomePage';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <AuthenticatedRoute path="/" exact component={HomePage} />
            <UnauthenticatedRoute path="/login" exact component={UserLogIn} />
            <UnauthenticatedRoute path="/signup" exact component={UserSignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import UserSignUp from './users/UserSignUp';
import UserLogIn from './users/UserLogIn';
import history from '../history';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={UserLogIn} />
            <Route path="/sign-up" exact component={UserSignUp} />
          </Switch>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;

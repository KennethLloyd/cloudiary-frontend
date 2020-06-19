import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <Route path="/" exact component={UserLogIn} />
            <Route path="/sign-up" exact component={UserSignUp} />
            <Route path="/home" exact component={HomePage} />
          </Switch>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;

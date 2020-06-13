import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import UserSignUp from './users/UserSignUp';
import UserLogIn from './users/UserLogIn';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={UserLogIn} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RiseLoader from 'react-spinners/RiseLoader';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPen,
  faTrash,
  faTimes,
  faCheck,
  faChevronDown,
  faPlus,
  faEye,
  faEyeSlash,
  faSmileBeam,
  faSmile,
  faMeh,
  faFrown,
  faSadTear,
} from '@fortawesome/free-solid-svg-icons';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import UserSignUp from './users/UserSignUp';
import UserLogIn from './users/UserLogIn';
import HomePage from './home/HomePage';
import history from '../history';

const App = () => {
  library.add(
    faPen,
    faTrash,
    faTimes,
    faCheck,
    faChevronDown,
    faPlus,
    faEye,
    faEyeSlash,
    faSmileBeam,
    faSmile,
    faMeh,
    faFrown,
    faSadTear,
  );
  const isLoading = useSelector((state) => state.loader.isLoading);

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
      <RiseLoader
        css={`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        `}
        color={'#bde3f2'}
        size={20}
        loading={isLoading}
      />
    </div>
  );
};

export default App;

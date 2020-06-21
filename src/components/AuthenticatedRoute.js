import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(
    (state) => state.currentUser.token !== null,
  );

  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to={'/login'} />}
    </Route>
  );
};

export default AuthenticatedRoute;

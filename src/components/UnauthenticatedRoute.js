import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(
    (state) => state.currentUser.token !== null,
  );

  return (
    <Route {...rest}>{!isAuthenticated ? children : <Redirect to="/" />}</Route>
  );
};

export default UnauthenticatedRoute;

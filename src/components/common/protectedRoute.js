import React, { useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  const { state: authState } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (!authState.user)
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;

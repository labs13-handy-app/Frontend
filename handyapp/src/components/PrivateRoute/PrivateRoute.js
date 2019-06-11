import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('token');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Route
      {...rest}
      render={props => {
        if (!token && isLoggedIn === false) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
        // return token && isAuthenticated && errorStatusCode !== 403 ? (
        //   <Component {...props} />
        // ) : (
        //   <Redirect to="/" />
        // );
      }}
    />
  );
};

const mapStateToProps = ({tokenReducer}) => ({
  isAuthenticated: tokenReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);

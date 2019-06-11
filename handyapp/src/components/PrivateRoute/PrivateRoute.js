import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getToken} from '../../actions';

class PrivateRoute extends React.Component {
  render() {
    console.log(this.props);
    const {Component, isAuthenticated, user, ...rest} = this.props;
    const token = localStorage.getItem('token');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
      <Route
        {...rest}
        render={props => {
          if (
            (token &&
              isLoggedIn === true &&
              isAuthenticated === true &&
              user.isBoarded === true) ||
            user.isBoarded === 1
          ) {
            return <Component {...props} />;
          } else if (
            (token &&
              isLoggedIn === true &&
              isAuthenticated === true &&
              user.isBoarded === false) ||
            user.isBoarded === 0
          ) {
            return <Redirect to="/onboarding" />;
          }
          // } else {
          //   return <Redirect to="/" />;
          // }
          // return token && isAuthenticated && errorStatusCode !== 403 ? (
          //   <Component {...props} />
          // ) : (
          //   <Redirect to="/" />
          // );
        }}
      />
    );
  }
}

const mapStateToProps = ({tokenReducer}) => ({
  isAuthenticated: tokenReducer.isAuthenticated,
  user: tokenReducer.token
});

export default connect(
  mapStateToProps,
  {getToken}
)(PrivateRoute);

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getToken} from '../../actions';

class PrivateRoute extends React.Component {
  render() {
    console.log(this.props);
    const {component: Component, isAuthenticated, user, ...rest} = this.props;
    const token = localStorage.getItem('token');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    return (
      <Route
        {...rest}
        render={props => {
          if (!token && isLoggedIn === false && isAuthenticated === false) {
            return <Redirect to="/" />;
          } else {
            return <Component {...props} />;
          }
        }}
      />
    );
  }
}

const mapStateToProps = ({tokenReducer}) => ({
  isAuthenticated: tokenReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  {getToken}
)(PrivateRoute);

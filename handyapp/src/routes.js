import React from 'react';
import {Route, Router} from 'react-router-dom';
import AuthNavBar from './AuthNavBar';
import Callback from './Callback/Callback';
import Auth from './auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const MakeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          exact
          path="/"
          render={props => <AuthNavBar auth={auth} {...props} />}
        />
        <Route
          exact
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};

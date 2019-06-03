import React from 'react';
import {Route, Router} from 'react-router-dom';
import Landing from './Landing';
import Callback from './Callback/Callback';
import Auth from './auth/Auth';
import history from './history';
import Home from './components/Home';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const MakeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          exact
          path="/"
          render={props => <Landing auth={auth} {...props} />}
        />
        <Route
          exact
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route 
        exact
        path="/home"
        component={Home}/>

      </div>
    </Router>
  );
};

export default MakeMainRoutes;

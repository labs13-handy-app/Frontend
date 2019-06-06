import React from 'react';
import {withRouter, Route, Router} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Callback from './components/Callback/Callback';
import Landing from './components/Landing';
import Home from './components/Home';
import history from './history';
// import {Button} from 'reactstrap';

import './App.css';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <div className="App">
      <Router history={history}>
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
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default withRouter(App);

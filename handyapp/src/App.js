import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import NavBar from './components/NavBar';
import Callback from './components/Callback/Callback';
import Landing from './components/Landing';
import Home from './components/HomePage/Home';
import AddNewProject from './components/HomeOwners/AddNewProject';

import './App.css';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <div className="App">
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
      <Route path="/add-new-project" component={AddNewProject} />
    </div>
  );
}

export default withRouter(App);

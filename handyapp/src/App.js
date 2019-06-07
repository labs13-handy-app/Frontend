import React from 'react';
import {withRouter, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Callback from './components/Callback/Callback';
import Landing from './components/Landing';
import Home from './components/HomePage/Home';
import Onboarding from './components/Onboarding/Onboarding';
import ContractorForm from './components/HomePage/ContractorForm';
import HomeownerForm from './components/HomePage/HomeownerForm';
import Dashboard from './components/Dashboard/Dashboard';
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
      <Route exact path="/onboarding" component={Onboarding} />
      <Route exact path="/homeowner-onboarding" component={HomeownerForm} />
      <Route exact path="/contractor-onboarding" component={ContractorForm} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default withRouter(App);

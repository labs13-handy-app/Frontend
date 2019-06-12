import React from 'react';
import {withRouter, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import NavBar from './components/NavBar';
import Callback from './components/Callback/Callback';
import Landing from './components/Landing';
import Onboarding from './components/Onboarding/Onboarding';
import ContractorForm from './components/HomePage/ContractorForm';
import HomeownerForm from './components/HomePage/HomeownerForm';
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/Projects';
import Bids from './components/Bids/Bids';
import ProjectsById from './components/Projects/ProjectsById';
import AddBid from './components/ServiceProviders/AddBid';

import './App.css';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends React.Component {
  login = () => {
    auth.login();
  };

  logout = () => {
    setTimeout(() => {
      auth.logout();
    }, 1000);
  };

  render() {
    const {isAuthenticated} = auth;
    return (
      <div className="App">
        <NavBar
          isAuthenticated={isAuthenticated}
          login={this.login}
          logout={this.logout}
        />
        <div>
          <div className="container">
            <Route exact path="/" render={props => <Landing {...props} />} />
            <Route
              exact
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
            <Route
              path="/onboarding"
              render={props => <Onboarding {...props} />}
            />
            <Route path="/homeowner-onboarding" component={HomeownerForm} />
            <Route
              exact
              path="/contractor-onboarding"
              component={ContractorForm}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/projects" component={Projects} />
            <Route path="/bids" component={Bids} />
            <Route path="/addbid" component={AddBid} />
            <Route e path="/projects/id" component={ProjectsById} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

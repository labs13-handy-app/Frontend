import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import NavBar from './components/LandingPage/NavBar';
import Callback from './components/Callback/Callback';
import Landing from './components/LandingPage/Landing';
import Onboarding from './components/Onboarding/Onboarding';
import ContractorForm from './components/HomePage/ContractorForm';
import HomeownerForm from './components/HomePage/HomeownerForm';
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/Projects';
import Bids from './components/Bids/Bids';
import addbid from './components/ServiceProviders/addbid';
import ProjectsById from './components/Projects/ProjectsById';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import ServiceProviderFeedback from './components/HomeOwners/ServiceProviderFeedback'

//import './App.css';

library.add(fab, faCheckSquare);

const auth = new Auth();

const handleAuthentication = ({ location }) => {
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
    const { isAuthenticated } = auth;
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
<<<<<<< HEAD
            <Route path="/addbid" component={AddBid} />
            <Route e path="/projects/id" component={ProjectsById} />
=======
            <Route path="/addbid" component={addbid} />
            <Route exact path="/project/:id" component={ProjectsById} />
            <Route exact path="/contractor/:id" component={ServiceProviderFeedback} />
>>>>>>> origin
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

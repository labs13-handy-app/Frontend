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
// import Projects from './components/Projects/Projects';
import Bids from './components/Bids/Bids';
<<<<<<< HEAD
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProjectsById from './components/Projects/ProjectsById';
=======
import addbid from './components/ServiceProviders/addbid'
import ProjectsById from './components/Projects/ProjectsById'
>>>>>>> master

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
<<<<<<< HEAD
        <div className="container">
          <div>
            <Route exact path="/" render={props => <Landing {...props} />} />
            <Route
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
            <PrivateRoute
              path="/homeowner-onboarding"
              component={HomeownerForm}
            />
            <PrivateRoute
              path="/contractor-onboarding"
              component={ContractorForm}
            />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            {/* <PrivateRoute path="/projects" component={Projects} /> */}
            <PrivateRoute path="/bids" component={Bids} />
          </div>
=======
        <div>
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
            exact
            path="/onboarding"
            render={props => <Onboarding {...props} />}
          />
          <Route exact path="/homeowner-onboarding" component={HomeownerForm} />
          <Route
            exact
            path="/contractor-onboarding"
            component={ContractorForm}
          />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/bids" component={Bids} />
          <Route exact path="/addbid" component={addbid} />
          <Route exact path='/projects/id' component={ProjectsById} /> 
>>>>>>> master
        </div>
      </div>
    );
  }
}

export default withRouter(App);

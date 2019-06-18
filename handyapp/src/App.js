import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import NavBar from './components/LandingPage/NavBar';
import Callback from './components/Callback/Callback';
import Landing from './components/LandingPage/Landing';
import Onboarding from './components/Onboarding/Onboarding';
import ContractorForm from './components/HomePage/ContractorForm';
import HomeownerForm from './components/HomePage/HomeownerForm';
import HomeOwnerDashboard from './components/HomeOwnerDashboard/HomeOwnerDashboard';
import ContractorDashboard from './components/ContractorDashboard/ContractorDashboard';
import Projects from './components/Projects/Projects';
import Bids from './components/Bids/Bids';
import AddBid from './components/ServiceProviders/AddBid';
import ProjectsById from './components/Projects/ProjectsById';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import ServiceProviderFeedback from './components/HomeOwners/ServiceProviderFeedback';
import Stripe from './components/Stripe/Stripe';
import SubmitBid from './components/ServiceProviders/SubmitBid';
import NotFound from './components/NotFound/NotFound';
import './App.css';

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
          <Switch>
            <Route exact path="/" render={props => <Landing {...props} />} />
            <Route
              exact
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />

            {/* <div className="container"> */}
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
            <Route
              path="/dashboard-homeowner"
              render={props => <HomeOwnerDashboard {...props} />}
            />
            <Route
              path="/dashboard-contractor"
              component={ContractorDashboard}
            />
            <Route path="/projects" component={Projects} />
            <Route path="/bids" component={Bids} />
            <Route path="/addbid" component={AddBid} />
            <Route exact path="/project/:id" component={ProjectsById} />
            <Route
              exact
              path="/contractor/:id"
              component={ServiceProviderFeedback}
            />

            <Route exact path="/checkout" component={Stripe} />
            <Route exact path="/add-bid/:id" component={SubmitBid} />
            {/* Using "*" as a value of the path parameter to get a non-greedy matching.
              It needs to be declared at the very bottom of your routes configuration,
              so the <Route /> is only mounted if any of the routes' path declared above are not matched. */}
            <Route path="*" component={NotFound} />
            {/* </div> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

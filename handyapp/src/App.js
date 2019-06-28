import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import NavigationBar from './components/LandingPageN/components/NavigationBar';
import Callback from './components/Callback/Callback';
import LandingPage from './components/LandingPageN/LandingPage';
import Onboarding from './components/Onboarding/Onboarding';
import ContractorForm from './components/HomePage/ContractorForm';
import HomeownerForm from './components/HomePage/HomeownerForm';
import HomeOwnerDashboard from './components/HomeOwnerDashboard/HomeOwnerDashboard';
import ContractorDashboard from './components/ContractorDashboard/ContractorDashboard';
import Projects from './components/Projects/Projects';
import Bids from './components/Bids/Bids';
import AddBid from './components/ServiceProviders/AddBid';
import ProjectsById from './components/Projects/ProjectsById';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import ServiceProviderFeedback from './components/HomeOwners/ServiceProviderFeedback';
// import Stripe from './components/Stripe/Stripe';
// import SubmitBid from './components/ServiceProviders/SubmitBid';
import NotFound from './components/NotFound/NotFound';
import MakePayment from './components/Stripe/MakePayment';
import StripeCallback from './components/Callback/StripeCallback';
import StripeTransfer from './components/Stripe/StripeTransfer';
import Footer from './components/Footer/Footer';

import './App.css';

library.add(fab, faCheckSquare);

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
        <NavigationBar
          {...this.props}
          isAuthenticated={isAuthenticated}
          login={this.login}
          logout={this.logout}
        />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <LandingPage
                  {...props}
                  login={this.login}
                  logout={this.logout}
                />
              )}
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
              render={props => <ServiceProviderFeedback {...props} />}
            />
            <Route exact path="/makepayment" component={MakePayment} />
            <Route path="/stripecallback" component={StripeCallback} />
            <Route path="/transfer" component={StripeTransfer} />

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

            <Route exact path="/projects" component={Projects} />
            <Route path="/bids" component={Bids} />
            <Route path="/addbid" component={AddBid} />

            <Route exact path="/project/:id" component={ProjectsById} />

            <Route
              exact
              path="/contractor/:id"
              component={ServiceProviderFeedback}
            />
            <Route exact path="/makepayment" component={MakePayment} />
            <Route path="/stripecallback" component={StripeCallback} />
            <Route path="/transfer" component={StripeTransfer} />

            {/* <Route exact path="/checkout" component={Stripe} /> */}

            {/* Using "*" as a value of the path parameter to get a non-greedy matching.
              It needs to be declared at the very bottom of your routes configuration,
              so the <Route /> is only mounted if any of the routes' path declared above are not matched. */}
            {/* <Route exact path="*" component={NotFound} /> */}
            {/* </div> */}

            {/* </div> */}
            {/* </Switch> */}

            <Route path="*" component={NotFound} />
          </Switch>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);

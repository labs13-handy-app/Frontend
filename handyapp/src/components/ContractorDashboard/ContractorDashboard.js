import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import ContractorCard from '../ContractorCard/ContractorCard';
import Projects from '../Projects/Projects';
import ContractorEditProfile from '../ContractorEditProfile/ContractorEditProfile';
import {getToken as getUser} from '../../actions';
import Loader from 'react-loader-spinner';
import {ModalContainer, ModalRoute} from 'react-router-modal';
import AddNewBid from '../ServiceProviders/AddNewBid';

import './ContractorDashboard.css';

class ContractorDashboard extends Component {
  componentWillMount() {
    this.props.getUser();
  }
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    // if (!localStorage.token) this.props.history.push('/');
    // if (this.props.user && this.props.user.isBoarded === false) {
    //   this.props.history.push('/contractor-onboarding');
    //   window.location.reload();
    // }

    // if (localStorage.token && localStorage.account_type === 'contractor')
    //   this.props.history.push('/dashboard-homeowner');

    // if (this.props.user === '') {
    if (
      !localStorage.token &&
      !localStorage.account_type &&
      localStorage.account_type !== 'contractor'
    ) {
      localStorage.setItem('account_type', 'contractor');
    }
    if (localStorage.token && localStorage.account_type === 'homeowner')
      this.props.history.push('/dashboard-homeowner');

    if (!localStorage.token) this.props.history.push('/');

    if (this.props.user === '') {
      return (
        <div className="centered">
          <Loader type="Oval" color="#4c5b48" height="100" width="100" />
        </div>
      );
    }
    return (
      <div className="Dashboard">
        <div className="side-panel">
          <ContractorCard user={this.props.user} />
        </div>
        <div className="main-panel">
          <Route
            render={props => <Projects {...props} />}
            path={`/dashboard-contractor/projects`}
          />
          <ModalRoute
            path="/dashboard-contractor/projects/add-bid/:id"
            parentPath="/dashboard-contractor/projects"
          >
            <AddNewBid {...this.props} />
          </ModalRoute>
          <div className="main-panel">
            <Route
              render={props => (
                <ContractorEditProfile {...props} user={this.props.user} />
              )}
              path={`/dashboard-contractor/users/${
                this.props.user.id
              }/edit-profile`}
            />
          </div>
        </div>
        <ModalContainer />
      </div>
    );
  }
}

const mapStateToProps = ({tokenReducer: usersReducer}, props) => ({
  user: usersReducer.token
});

export default connect(
  mapStateToProps,
  {getUser}
)(ContractorDashboard);

import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import ContractorCard from '../ContractorCard/ContractorCard';
import Projects from '../Projects/Projects';
// import UserProjects from '../UserProjects/UserProjects';
import {getToken as getUser} from '../../actions';
import Loader from 'react-loader-spinner';

import './ContractorDashboard.css';

class ContractorDashboard extends Component {
  componentWillMount() {
    this.props.getUser();
  }
  componentDidMount() {
    this.props.getUser();
    !localStorage.account_type && localStorage.account_type !== 'contractor'
      ? localStorage.setItem('account_type', 'contractor')
      : '';
  }
  render() {
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    if (this.props.user === '') {
      return (
        <div className="centered">
          <Loader type="Oval" color="#4c5b48" height="100" width="100" />
        </div>
      );
    }
    if (this.props.user.account_type === 'homeowner') {
      this.props.history.push('/dashboard-homeowner');
    } else if (this.props.user.account_type === null) {
      this.props.history.push('/onboarding');
    }
    return (
      <div className="Dashboard">
        <div className="side-panel">
          <ContractorCard user={this.props.user} />
        </div>
        <div className="main-panel">
          <Route
            render={props => <Projects {...props} user={this.props.user} />}
            path={`/dashboard-contractor/projects`}
          />
        </div>
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

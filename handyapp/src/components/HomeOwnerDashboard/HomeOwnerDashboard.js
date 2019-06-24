import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import UserCard from '../UserCard/UserCard';
import AddProject from '../AddProject/AddProject';
import UserProjects from '../UserProjects/UserProjects';
import EditProfile from '../EditProfile/EditProfile';
import {getToken as getUser} from '../../actions';
import Loader from 'react-loader-spinner';

import './HomeOwnerDashboard.css';

class HomeOwnerDashboard extends Component {
  componentWillMount() {
    this.props.getUser();
  }
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    if (
      !localStorage.token &&
      !localStorage.account_type &&
      localStorage.account_type !== 'homeowner'
    ) {
      localStorage.setItem('account_type', 'homeowner');
    }
    if (localStorage.token && localStorage.account_type === 'contractor')
      this.props.history.push('/dashboard-contractor');

    if (!localStorage.token) this.props.history.push('/');

    if (this.props.user === '') {
      return (
        <div className="centered">
          <Loader type="Oval" color="#4c5b48" height="100" width="100" />
        </div>
      );
    }
    if (this.props.user.account_type === 'contractor') {
      this.props.history.push('/dashboard-contractor');
    }
    return (
      <div className="Dashboard">
        <div className="side-panel">
          <UserCard user={this.props.user} />
          {/* <UserCardM user={this.props.user} /> */}
        </div>
        <div className="main-panel">
          <Route
            path="/dashboard-homeowner/users/:id/add-project"
            render={props => <AddProject {...props} user={this.props.user} />}
          />
          <Route
            path="/dashboard-homeowner/users/:id/edit-profile"
            render={props => <EditProfile {...props} user={this.props.user} />}
          />
          <Route
            render={props => <UserProjects {...props} user={this.props.user} />}
            path={`/dashboard-homeowner/users/:id/projects/`}
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
)(HomeOwnerDashboard);

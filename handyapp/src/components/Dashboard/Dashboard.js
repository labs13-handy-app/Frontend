import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import UserCard from '../UserCard/UserCard';
import AddProject from '../AddProject/AddProject';
import UserProjects from '../UserProjects/UserProjects';
import {getToken as getUser} from '../../actions';
import Loader from 'react-loader-spinner';

import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    if (!this.props.user) {
      return (
        <div className="centered">
          <Loader type="Oval" color="#4c5b48" height="100" width="100" />
        </div>
      );
    }
    return (
      <div className="Dashboard">
        <div className="side-panel">
          <UserCard user={this.props.user} />
        </div>
        <div className="main-panel">
          <Route
            path="/dashboard/users/:id/add-project"
            component={AddProject}
          />
          <Route
            render={props => <UserProjects {...props} user={this.props.user} />}
            path={`/dashboard/users/:id/projects/`}
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
)(Dashboard);

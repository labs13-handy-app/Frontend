import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import UserCard from '../UserCard/UserCard';
import AddProject from '../AddProject/AddProject';
import UserProjects from '../UserProjects/UserProjects';
import {getToken as getUser} from '../../actions';

import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    return (
      <div className="Dashboard">
        <div className="side-panel">
          <UserCard user={this.props.user} />
        </div>
        <div className="main-panel">
          <Route path="/dashboard/add-project" component={AddProject} />
          <Route
            render={props => <UserProjects {...props} user={this.props.user} />}
            path={`/dashboard/projects/:id`}
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

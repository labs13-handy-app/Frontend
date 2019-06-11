import React, {Component} from 'react';
import UserCard from '../UserCard/UserCard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddProject from '../AddProject/AddProject';
import Projects from '../Projects/Projects';

import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Dashboard">
        <div className="side-panel">
          <UserCard />
        </div>
        <div className="main-panel">
          <PrivateRoute path="/dashboard/add-project" component={AddProject} />
          <PrivateRoute path="/dashboard/projects" component={Projects} />
        </div>
      </div>
    );
  }
}

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import UserProject from '../Projects/UserProject';
import {getUserProjects} from '../../actions';
import Loader from 'react-loader-spinner';

import './UserProjects.css';

class UserProjects extends Component {
  componentWillMount() {
    const {user} = this.props;
    this.props.getUserProjects(user.id);
  }

  render() {
    if (!localStorage.token) {
      this.props.history.push('/');
    }

    if (this.props.userProjects && this.props.userProjects.user) {
      const {projects} = this.props.userProjects.user;

      return (
        <div className="project-container">
          <h2>My Projects </h2>

          {projects.map(p => {
            return (
              <UserProject
                key={p.id}
                id={p.id}
                title={p.title}
                description={p.description}
                images={p.images ? p.images : ''}
                thumbnail={p.images ? p.images[0] : ''}
                bids={p.bids}
              />
            );
          })}
        </div>
      );
    } else if (
      this.props.userProjects &&
      this.props.userProjects.projects &&
      this.props.userProjects.projects.length < 0
    ) {
      return (
        <div className="project-container empty">
          <Loader type="Oval" color="#4c5b48" height="100" width="100" />
        </div>
      );
    } else {
      return (
        <div className="project-container">
          <h2>My Projects </h2>
          <div className="content">
            <h3>You don't have any projects</h3>
            <p className="message">Click below to add your first project.</p>
            <NavLink
              to={`/dashboard-homeowner/users/${
                this.props.user.id
              }/add-project`}
            >
              <button className="action-button">
                <i className="fas fa-plus fa-lg" />
              </button>
            </NavLink>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({getUserProjectsReducer}, props) => {
  return {
    userProjects: getUserProjectsReducer.projects
  };
};
export default connect(
  mapStateToProps,
  {getUserProjects}
)(UserProjects);

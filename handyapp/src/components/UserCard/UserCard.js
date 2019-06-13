import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import avatar from '../../img/default-avatar.png';
import {getToken} from '../../actions';
import Loader from 'react-loader-spinner';

import './UserCard.css';

class UserCard extends Component {
  render() {
    const {user} = this.props;
    if (!this.props.user.first_name) {
      return (
        <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
      );
    }
    return (
      <div className="UserCard">
        <div className="user-info">
          <img
            src={user.avatar ? user.avatar : avatar}
            alt=""
            className="active-user"
            width="95px"
            height="95px"
          />
          {user && (
            <h4 className="username">
              {user.first_name} {user.last_name}
            </h4>
          )}
          <button className="edit-photo">Edit Photo</button>
        </div>
        <div className="tabs">
          <div className="tab-top">
            <NavLink to={`/dashboard-homeowner/users/${user.id}/add-project`}>
              <button className="action-button">Add Project</button>
            </NavLink>
          </div>
          <div className="tab">
            <div className="icon">
              <i className="fas fa-hard-hat" />
            </div>
            <NavLink
              to="/dashboard-homeowner/contractor"
              className="tab-button"
            >
              Contractor
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
          <div className="tab">
            <div className="icon">
              <i className="fas fa-toilet" />
            </div>
            <NavLink to="/dashboard-homeowner/plumber" className="tab-button">
              Plumber
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
          <div className="tab">
            <div className="icon">
              <i className="fas fa-bolt" />
            </div>
            <NavLink
              to="/dashboard-homeowner/Electrician"
              className="tab-button"
            >
              Electrician
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
          <div className="tab">
            <div className="icon">
              <i className="fas fa-clipboard-list" />
            </div>
            <NavLink
              to={`/dashboard-homeowner/users/${user.id}/projects/`}
              className="tab-button"
            >
              My Projects
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tokenReducer}, props) => ({
  token: tokenReducer.token
});

export default connect(
  mapStateToProps,
  {getToken}
)(UserCard);

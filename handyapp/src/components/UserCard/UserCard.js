import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import avatar from '../../img/default-avatar.png';
import {getToken} from '../../actions';

import './UserCard.css';

class UserCard extends Component {
  render() {
    const {token: user} = this.props;
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
            <Link to="/add-project" className="action-button">
              Add Project
            </Link>
          </div>
          <div className="tab">
            <NavLink to="/contractor" className="tab-button">
              Contractor
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to="/plumber" className="tab-button">
              Plumber
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to="/Electrician" className="tab-button">
              Electrician
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to="/my-projects" className="tab-button">
              My projects
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

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {getToken, onBoarding} from '../../actions';
import avatar from '../../img/default-avatar.png';

import './UserCard.css';

class UserCard extends Component {
  state = {
    avatar: ''
  };
  showWidget = widget => {
    widget.open();
  };

  render() {
    const {token: user} = this.props;
    if (!user.first_name) {
      return (
        <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
      );
    }
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'sandhu',
        uploadPreset: 'clyrl6ow',
        tags: ['app']
      },
      async (error, result) => {
        let {secure_url} = result.info;
        if (!error && result && result.event === 'success') {
          await this.setState({
            avatar: secure_url
          });

          const newUser = {
            ...user,
            avatar: this.state.avatar
          };

          await this.props.onBoarding(user.id, newUser);
          await this.setState({avatar: ''});
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    );
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

          <button
            onClick={e => {
              e.preventDefault();
              this.showWidget(widget);
            }}
            className="edit-photo"
          >
            Edit Photo
          </button>
        </div>
        <div className="tabs">
          <div className="tab">
            <NavLink to={`/dashboard-homeowner/users/${user.id}/add-project`}>
              Add Project
            </NavLink>
          </div>
          <div className="tab">
            <NavLink
              to="/dashboard-homeowner/edit-profile"
              className="tab-button"
            >
              Edit Profile
            </NavLink>
          </div>

          <div className="tab">
            <NavLink
              to={`/dashboard-homeowner/users/${user.id}/projects/`}
              className="tab-button"
            >
              My Projects
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tokenReducer, onBoardingReducer}, props) => {
  return {
    token: tokenReducer.token,
    user: onBoardingReducer.user
  };
};

export default connect(
  mapStateToProps,
  {getToken, onBoarding}
)(UserCard);

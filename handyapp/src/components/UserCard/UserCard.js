import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import jsConvert from 'js-convert-case';
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
    if (!this.props.token) {
      return (
        <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
      );
    }
    const {token: user} = this.props;

    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
        uploadPreset: `${process.env.REACT_APP_CLOUDINARY_PRESET}`,
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
          <button
            onClick={e => {
              e.preventDefault();
              this.showWidget(widget);
            }}
            className="edit-photo"
          >
            <img
              src={user.avatar ? user.avatar : avatar}
              alt=""
              className="active-user"
              width="95px"
              height="95px"
            />
          </button>
          {user && (
            <>
              <h4 className="username">
                {jsConvert.toHeaderCase(user.first_name)} {user.last_name}
              </h4>
              <p className="user-handle">@{user.first_name.toLowerCase()}</p>
            </>
          )}
        </div>
        <div className="tabs">
          <div className="tab">
            <NavLink to={`/dashboard-homeowner/users/${user.id}/add-project`}>
              Add Project
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
          <div className="tab">
            <NavLink
              to={`/dashboard-homeowner/users/${user.id}/edit-profile`}
              className="tab-button"
            >
              Edit Profile
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

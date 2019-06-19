import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import avatar from '../../img/default-avatar.png';
import {getToken, onBoarding} from '../../actions';
import Loader from 'react-loader-spinner';

import './ContractorCard.css';

class ContractorCard extends Component {
  state = {
    avatar: ''
  };
  showWidget = widget => {
    widget.open();
  };

  render() {
    const {user} = this.props;
    if (!user.first_name) {
      return (
        <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
      );
    }
    console.log(this.props);
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
            <div className="icon">
              <i className="fas fa-clipboard-list" />
            </div>
            <NavLink
              to={`/dashboard-contractor/projects`}
              className="tab-button"
            >
              Available Projects
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
          <div className="tab">
            <div className="icon">
              <i class="fab fa-stripe-s" />
            </div>
            <NavLink
              href="https://dashboard.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_FC1yU4l4i7xldVGX8RcFaMBh5ipi5GBq&scope=read_write"
              className="tab-button"
            >
              Connect Stripe
              <i className="fas fa-chevron-right" />
            </NavLink>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tokenReducer, onBoardingReducer}, props) => ({
  token: tokenReducer.token,
  user: onBoardingReducer.user
});

export default connect(
  mapStateToProps,
  {getToken, onBoarding}
)(ContractorCard);

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import jsConvert from 'js-convert-case';
import avatar from '../../img/default-avatar.png';
import {getToken, onBoarding} from '../../actions';
import Loader from 'react-loader-spinner';
import Transfer from '../Stripe/Transfer';

import './ContractorCard.css';

class ContractorCard extends Component {
  state = {
    avatar: ''
  };
  showWidget = widget => {
    widget.open();
  };

  render() {
    // console.log(this.props);
    const {user} = this.props;
    if (!user) {
      return (
        <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
      );
    }

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
    console.log(this.props);
    return (
      <div className="ContractorCard">
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
              <p className="contractor-handle">
                @{user.first_name.toLowerCase()}
              </p>
              <p> Service Professional
              </p>
            </>
          )}
        </div>
        <div className="tabs">
          <div className="tab">
            <NavLink
              to={`/dashboard-contractor/projects`}
              className="tab-button"
            >
              <button>Available Projects</button>
            </NavLink>
          </div>
          <div className="tab">
            <NavLink
              to={`/dashboard-contractor/users/${user.id}/edit-profile`}
              className="tab-button"
            >
              <button>Edit Profile</button>
            </NavLink>
          </div>
          <div className="tab">
            {!user.payout_id && (
              <a
                href="https://dashboard.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_FC1yU4l4i7xldVGX8RcFaMBh5ipi5GBq&scope=read_write"
                className="tab-button"
              >
                <button>Connect Stripe</button>
              </a>
            )}
            {user.payout_id && <Transfer user={user} />}
          </div>
          <div />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tokenReducer, onBoardingReducer}, props) => ({
  user: tokenReducer.token
  // user: onBoardingReducer.user
});

export default connect(
  mapStateToProps,
  {getToken, onBoarding}
)(ContractorCard);

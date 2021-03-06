import React, {Component} from 'react';
import {connect} from 'react-redux';
import jsConvert from 'js-convert-case';
import NumberFormat from 'react-number-format';
import Loader from 'react-loader-spinner';
import {getToken, onBoarding as editUser} from '../../actions';

import './EditProfile.css';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: this.props.user ? this.props.user.first_name : '',
        last_name: this.props.user ? this.props.user.last_name : '',
        address: this.props.user ? this.props.user.address : '',
        phone_number: this.props.user ? this.props.user.phone_number : '',
        email: this.props.user ? this.props.user.email : '',
        avatar: this.props.user ? this.props.user.avatar : ''
      }
    };
  }

  showWidget = widget => {
    widget.open();
  };

  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [e.target.id]: e.target.value
      }
    }));
  };

  onSubmit = async e => {
    e.preventDefault();

    await this.props.editUser(this.props.user.id, this.state.user);
    await this.props.history.push(
      `/dashboard-homeowner/users/${this.props.user.id}/projects`
    );
    window.location.reload();
  };

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
        uploadPreset: `${process.env.REACT_APP_CLOUDINARY_PRESET}`,
        tags: ['app']
      },
      async (error, result) => {
        let {secure_url} = result.info;
        if (!error && result && result.event === 'success') {
          await this.setState(prevState => ({
            user: {
              ...prevState.user,
              avatar: secure_url
            }
          }));
        }
      }
    );
    const {
      first_name,
      last_name,
      address,
      phone_number,
      email
    } = this.state.user;

    return (
      <div className="Edit">
        <h2>Edit Profile</h2>
        <div className="EditProfile">
          <form onSubmit={this.onSubmit}>
            <div className="user-form-content">
              <div className="name">
                <div className="user-form-item first-name">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    onChange={this.onChange}
                    value={jsConvert.toHeaderCase(first_name)}
                    id="first_name"
                  />
                </div>
                <div className="user-form-item last-name">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    onChange={this.onChange}
                    value={last_name}
                    id="last_name"
                  />
                </div>
              </div>
              <div className="user-form-item">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={email}
                  id="email"
                />
              </div>
              <div className="user-form-item">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={address}
                  id="address"
                />
              </div>
              <div className="user-form-item">
                <label htmlFor="phone_number">Phone</label>
                <NumberFormat
                  onChange={this.onChange}
                  id="phone_number"
                  format="(###) ###-####"
                  mask="_"
                  placeholder="(000) 000-0000"
                  value={phone_number}
                />
              </div>
              <div className="form-footer">
                <div className="user-form-item">
                  <div className="photo">
                    <button
                      className="profile-image"
                      type="file"
                      onClick={e => {
                        e.preventDefault();
                        this.showWidget(widget);
                      }}
                    >
                      <i className="fas fa-camera" />
                    </button>
                    <p>Upload a profile image</p>
                  </div>
                </div>
                <button className="edit-profile" type="submit">
                  {this.props.started ? (
                    <Loader type="Oval" color="#FFF" height="24" width="24" />
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tokenReducer, onBoardingReducer}, props) => {
  return {
    user: tokenReducer.token,
    started: onBoardingReducer.started
  };
};

export default connect(
  mapStateToProps,
  {getToken, editUser}
)(EditProfile);

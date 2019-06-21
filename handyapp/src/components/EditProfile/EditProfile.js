import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getToken, onBoarding as editUser} from '../../actions';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: this.props.user ? this.props.user.first_name : '',
        last_name: this.props.user ? this.props.user.last_name : '',
        address: this.props.user ? this.props.user.address : '',
        phone: this.props.user ? this.props.user.phone : '',
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

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.user);

    this.props.editUser(this.props.user.id, this.state.user);
    this.props.history.push(
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
    const {first_name, last_name, address, phone, email} = this.state.user;
    return (
      <div>
        <h2>Edit Profile</h2>
        <div className="EditProfile">
          <form onSubmit={this.onSubmit}>
            <div className="user-form-content">
              <div className="user-form-item">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={first_name}
                  id="first-name"
                />
              </div>
              <div className="user-form-item">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={last_name}
                  id="last-name"
                />
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
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={phone}
                  id="phone"
                />
              </div>
              <div className="user-form-item">
                <button
                  type="file"
                  onClick={e => {
                    e.preventDefault();
                    this.showWidget(widget);
                  }}
                />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tokenReducer}, props) => {
  return {
    user: tokenReducer.token
  };
};

export default connect(
  null,
  {getToken, editUser}
)(EditProfile);

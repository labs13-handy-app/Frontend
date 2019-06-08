import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onBoarding, getToken} from '../../actions';

class HomeownerForm extends Component {
  state = {
    user: {
      id: '',
      first_name: '',
      last_name: '',
      nickname: '',
      email: '',
      phone_number: '',
      address: '',
      account_type: 'homeowner'
    }
  };

  componentWillMount() {
    this.props.getToken();
    const {foundUser: user} = this.props.user;
    if (user) {
      this.setState({
        user: {
          id: user.id,
          first_name: user.nickname,
          last_name: '',
          isBoarded: false,
          nickname: user.nickname,
          email: user.email,
          phone_number: '',
          address: '',
          account_type: user.account_type
        }
      });
    }
  }

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
    const user = {
      ...this.state.user,
      isBoarded: true
    };
    this.props.onBoarding(user.id, user);

    this.setState({
      user: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: ''
      }
    });

    this.props.history.push('/dashboard');
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.onSubmit} id="user-onboarding">
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            onChange={this.onChange}
            id="first_name"
            type="text"
            value={this.state.user.first_name}
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            onChange={this.onChange}
            id="last_name"
            type="text"
            value={this.state.user.last_name}
            placeholder="Enter last name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.onChange}
            id="email"
            type="email"
            value={this.state.user.email}
            placeholder="Enter email"
          />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            onChange={this.onChange}
            id="phone_number"
            type="tel"
            value={this.state.user.phone_number}
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            onChange={this.onChange}
            id="address"
            value={this.state.user.address}
            type="text"
            placeholder="Enter address"
          />
        </div>

        <button type="submit">Submit</button>
        <button type="upload">Upload Picture</button>
      </form>
    );
  }
}

const mapStateToProps = ({tokenReducer}, props) => {
  return {
    user: tokenReducer.token
  };
};

export default connect(
  mapStateToProps,
  {onBoarding, getToken}
)(HomeownerForm);

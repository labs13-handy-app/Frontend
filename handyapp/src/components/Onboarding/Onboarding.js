import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getToken, onBoarding} from '../../actions';

class Onboarding extends Component {
  state = {
    user: {
      account_type: ''
    }
  };
  componentWillMount() {
    this.props.getToken();
  }

  onSubmit = e => {
    e.preventDefault();
    const editedUser = {
      ...this.props.user,
      account_type: this.state.user.account_type
    };

    this.props.onBoarding(editedUser.id, editedUser);

    console.log(editedUser);

    if (editedUser.account_type === 'homeowner') {
      this.props.history.push('/homeowner-onboarding');
    } else if (editedUser.account_type === 'contractor') {
      this.props.history.push('/contractor-onboarding');
    } else {
      this.props.history.push('/onboarding');
    }
  };
  render() {
    console.log(this.props.user);
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    return (
      <div className="Onboarding">
        <div className="accounts">
          <h2>Welcome to Handyapp</h2>
          <p>Do you want to use the app as a:</p>
          <button
            onClick={() => this.setState({user: {account_type: 'homeowner'}})}
            className="homeowner-btn"
          >
            <div className="homeowner">
              <h4>Homeowner</h4>
            </div>
          </button>
          <p>Or</p>
          <button
            onClick={() => this.setState({user: {account_type: 'contractor'}})}
            className="contractor-btn"
          >
            <div className="contractor">
              <h4>Contractor</h4>
            </div>
          </button>
          <form onSubmit={this.onSubmit}>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStatToProps = ({tokenReducer}, props) => {
  return {
    user: tokenReducer.token
  };
};

export default connect(
  mapStatToProps,
  {getToken, onBoarding}
)(Onboarding);

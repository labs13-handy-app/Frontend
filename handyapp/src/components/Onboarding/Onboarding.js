import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getToken as getUser, onBoarding as editUser} from '../../actions';

import Homeowner from '../../img/Homeowner-btn.svg';
import Contractor from '../../img/Contractor-btn.svg';

import './Onboarding.css';

class Onboarding extends Component {
  state = {
    user: '',
    account_type: ''
  };

  componentWillMount() {
    this.props.getUser();
  }

  componentDidMount() {}

  handleHomeOwner = async () => {
    await this.setState({
      user: this.props.user,
      account_type: 'homeowner'
    });

    localStorage.setItem('account_type', 'homeowner');

    console.log(this.state.account_type);

    const editedUser = {
      ...this.state.user,
      account_type: this.state.account_type
    };

    await this.props.editUser(editedUser.id, editedUser);

    if (localStorage.account_type === 'homeowner')
      this.props.history.push('/homeowner-onboarding');
  };

  handleContractor = async () => {
    await this.setState({
      user: this.props.user,
      account_type: 'contractor'
    });

    localStorage.setItem('account_type', 'contractor');

    const editedUser = {
      ...this.state.user,
      account_type: this.state.account_type
    };

    await this.props.editUser(editedUser.id, editedUser);

    if (localStorage.account_type === 'contractor')
      this.props.history.push('/contractor-onboarding');
  };

  render() {
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    console.log(this.state);
    return (
      <div className="Onboarding">
        <div className="accounts">
          <h2>
            Welcome to <span>Handyapp</span>
          </h2>
          <p>Choose your account type:</p>
          <div className="choose">
            <div className="homeowner">
              <button onClick={this.handleHomeOwner} className="homeowner-btn">
                <img src={Homeowner} alt="homeowner-btn" />
              </button>
              <p>Homeowner</p>
            </div>
            <div className="contractor">
              <button
                onClick={this.handleContractor}
                className="contractor-btn"
              >
                <img src={Contractor} alt="contractor-btn" />
              </button>
              <p>Contractor</p>
            </div>
          </div>
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
  mapStateToProps,
  {getUser, editUser}
)(Onboarding);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, getToken} from '../../actions';
import MyForm from './MyForm';

class Home extends Component {
  componentWillMount() {
    this.props.getToken();
  }

  renderUser = () => {
    const {foundUser: user} = this.props.user;
    if (user) {
      return <MyForm user={user} />;
    }
  };

  render() {
    return <>{this.renderUser()}</>;
  }
}

const mapStatToProps = ({usersReducer, tokenReducer}, props) => {
  return {
    users: usersReducer.users,
    user: tokenReducer.token
  };
};

export default connect(
  mapStatToProps,
  {getUsers, getToken}
)(Home);

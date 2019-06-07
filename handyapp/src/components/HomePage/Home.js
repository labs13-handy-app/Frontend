import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, getToken} from '../../actions';
import MyForm from './MyForm';

class Home extends Component {
  componentWillMount() {
    const user = this.props.getToken();
    console.log(user);
    // const users = this.props.getUsers();
    // console.log(users);
  }

  componentDidMount() {
    const user = this.props.getToken();
    console.log(user);
  }
  // want the values pass the onsubmit prop
  submit = values => {
    console.log(values);
  };

  render() {
    const {foundUser: user} = this.props.user;
    console.log(user);
    return <MyForm onSubmit={this.submit} user={user} />;
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

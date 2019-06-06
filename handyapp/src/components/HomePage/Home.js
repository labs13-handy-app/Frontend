import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, getToken} from '../../actions';
import MyForm from './MyForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        account_type: 'homeowner',
        phone: '',
        address: ''
      }
    };
  }
  componentWillMount() {
    const users = this.props.getUsers();
    console.log(users);
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
    console.log(this.props);
    return <MyForm onSubmit={this.submit} />;
  }
}

const mapStatToProps = ({usersReducer, tokenReducer}, props) => {
  return {
    users: usersReducer.users,
    token: tokenReducer.token
  };
};

export default connect(
  mapStatToProps,
  {getUsers, getToken}
)(Home);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, getToken} from '../../actions';
import ContractorForm from './ContractorForm';
import HomeownerForm from './HomeownerForm';

class Home extends Component {
  componentWillMount() {
    this.props.getToken();
  }

  renderUserForm = () => {
    const {foundUser: user} = this.props.user;
    if (user && user.account_type === 'Contractor') {
      return <ContractorForm user={user} />;
    } else {
      return <HomeownerForm user={user} />;
    }
  };

  render() {
    // console.log(this.props);
    return <>{this.renderUserForm()}</>;
  }
}

const mapStatToProps = ({tokenReducer}, props) => {
  return {
    user: tokenReducer.token
  };
};

export default connect(
  mapStatToProps,
  {getUsers, getToken}
)(Home);

import React, {Component} from 'react';
import UserCard from '../UserCard/UserCard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export default class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <UserCard />
        {/* <PrivateRoute path="/add-project"  */}
      </div>
    );
  }
}

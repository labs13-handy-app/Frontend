import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    const {isAuthenticated} = this.props;

    return (
      <div>
        {isAuthenticated() && (
          <NavLink to="#" onClick={this.props.logout}>
            Logout
          </NavLink>
        )}
        {!this.props.isAuthenticated() && (
          <header>
            <div className="logo">
              <h2>Handyapp</h2>
            </div>
            <nav>
              <NavLink to="#" onClick={this.props.login}>
                Login
              </NavLink>
            </nav>
          </header>
        )}
      </div>
    );
  }
}

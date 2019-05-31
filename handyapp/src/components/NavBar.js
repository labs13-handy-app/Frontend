import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    const {isAuthenticated} = this.props;
    return (
      <div>
        {isAuthenticated() && <h4>You are logged in!</h4>}
        {!isAuthenticated() && (
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

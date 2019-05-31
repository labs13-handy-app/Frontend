import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const {isAuthenticated} = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() && <h4>You are logged in!</h4>}
        {!isAuthenticated() && (
          <header>
            <div className="logo">
              <h2>Handyapp</h2>
            </div>
            <nav>
              <NavLink to="#" onClick={this.login.bind(this)}>
                Login
              </NavLink>
            </nav>
          </header>
        )}
      </div>
    );
  }
}

export default NavBar;

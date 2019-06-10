import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    const {isAuthenticated} = this.props;

    return (
      <div className="Navbar">
        <header>
          <div className="logo">
            <h2>Tasker</h2>
          </div>
          <nav>
            {isAuthenticated() && (
              <>
                <NavLink to="#" onClick={this.props.logout}>
                  Logout
                </NavLink>
              </>
            )}
            {!this.props.isAuthenticated() && (
              <>
                <NavLink
                  className="btn-action"
                  to="#"
                  onClick={this.props.login}
                >
                  Login
                </NavLink>
              </>
            )}
          </nav>
        </header>
      </div>
    );
  }
}

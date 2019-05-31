import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      }
    };
  }

  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [e.target.id]: e.target.value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    // Action to create user
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-content">
            <div className="form-item">
              <label htmlFor="Enter username">Username</label>
              <input
                onChange={this.onChange}
                type="text"
                id="username"
                value={this.state.user.username}
                placeholder="Username"
              />
            </div>
            <div className="form-item">
              <label htmlFor="Enter password">Password</label>
              <input
                onChange={this.onChange}
                type="text"
                id="password"
                value={this.state.user.password}
                placeholder="Password"
              />
            </div>
            <div className="login-link">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

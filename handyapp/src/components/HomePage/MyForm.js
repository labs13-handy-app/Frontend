import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onBoarding} from '../../actions';
// import {Field, reduxForm} from 'redux-form';

class ContactForm extends Component {
  state = {
    user: {
      id: '',
      name: '',
      email: '',
      phone_number: '',
      account_type: 'homeowner',
      address: '',
      skills: '',
      licenses: '',
      experience: ''
    }
  };

  componentWillMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone_number: '',
          account_type: 'homeowner',
          address: '',
          skills: '',
          licenses: '',
          experience: ''
        }
      });
    }
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
    this.props.onBoarding(this.state.user.id, this.state.user);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} id="user-onboarding">
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.onChange}
            id="name"
            type="text"
            value={this.state.user.name}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label htmlFor="acount_type">Account Type</label>
          <div>
            <select
              onChange={this.onChange}
              id="account_type"
              form="user-onboarding"
              value={this.state.user.account_type}
            >
              <option value="homeowner">Homeowner</option>
              <option value="Contractor">Contractor</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.onChange}
            id="email"
            type="email"
            value={this.state.user.email}
            placeholder="Enter email"
          />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            onChange={this.onChange}
            id="phone_number"
            type="tel"
            value={this.state.user.phone_number}
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            onChange={this.onChange}
            id="address"
            value={this.state.user.address}
            type="text"
            placeholder="Enter address"
          />
        </div>
        <div>
          <label htmlFor="skills">Skills</label>
          <input
            required
            onChange={this.onChange}
            id="skills"
            value={this.state.user.skills}
            type="text"
            placeholder="Enter your area of expertise"
          />
        </div>
        <div>
          <label htmlFor="experience">Experience</label>
          <input
            required
            onChange={this.onChange}
            id="experience"
            value={this.state.user.experience}
            type="text"
            placeholder="Years of experience"
          />
        </div>
        <div>
          <label htmlFor="licenses">License</label>
          <input
            required
            onChange={this.onChange}
            id="licenses"
            value={this.state.user.licenses}
            type="text"
            placeholder="Enter license"
          />
        </div>

        <button type="submit">Submit</button>
        <button type="upload">Upload Picture</button>
      </form>
    );
  }
}

// // Wrap component with redux function
// ContactForm = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(ContactForm);

export default connect(
  null,
  {onBoarding}
)(ContactForm);

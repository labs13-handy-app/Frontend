import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>

          {/* Get Value of the field you refernce it by firstName */}
          <Field name="name" component="input" type="text" />
        </div>

        <div>
          <label>Account Type</label>
          <div>
            <Field name="type" component="select">
              <option />
              <option value="homeowner">Home Owner</option>
              <option value="serviceprovider">Service Provider</option>
            </Field>
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <Field name="phone" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="address">Home Address</label>
          <Field name="address" component="input" type="text" />
        </div>

        <button type="submit">Submit</button>
        <button type-="upload">Upload Picture</button>
      </form>
    );
  }
}

// Wrap component with redux function
ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm);

export default ContactForm;


import React, {Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component { 

 render(){
  return (
    <form onSubmit={this.props.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>

        {/* Get Value of the field you refernce it by firstName */}
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
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
      {/* <button disabled={!valid} type="submit">Submit</button> */}
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
})(ContactForm)

export default ContactForm;

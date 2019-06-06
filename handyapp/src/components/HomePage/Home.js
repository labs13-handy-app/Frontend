import React, { Component } from 'react';
import MyForm from './MyForm';

export default class Home extends Component {
  // want the values pass the onsubmit prop
  submit = values => {
    console.log(values);
  };

  render() {
    return <MyForm onSubmit={this.submit} />;
  }
}

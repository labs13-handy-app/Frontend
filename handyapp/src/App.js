import React from 'react';
import {withRouter, Route} from 'react-router-dom';
import Register from './components/Register';
import './App.css';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={SignIn} />

    </div>
  );
}

export default withRouter(App);

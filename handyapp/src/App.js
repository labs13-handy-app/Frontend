import React from 'react';
// import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';

import './App.css';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <div className="App">
      <h2>App</h2>
    </div>
  );
}

export default withRouter(App);

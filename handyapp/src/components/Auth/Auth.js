import history from '../../history';
import auth0 from 'auth0-js';
import {AUTH_CONFIG} from './auth0-variables';
import axiosWithAuth from '../../utils/AxiosAuth';

class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    audience: 'handy-app-api',
    scope: 'openid profile read:username',
    issuer: AUTH_CONFIG.domain
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', authResult.idToken);

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    const user = authResult.idTokenPayload;

    // Comment to work locally
    // axiosWithAuth()
    //   .post('https://handy-app-api.herokuapp.com/register', user)
    //   .then(res => {
    //     console.log(res.data);

    //     if (res.data.foundUser === undefined) {
    //       this.logout();
    //     } else if (
    //       res.data.foundUser.isBoarded === 0 ||
    //       res.data.foundUser.isBoarded === false
    //     ) {
    //       // navigate to the onboarding route
    //       history.replace('/onboarding');
    //     } else if (
    //       res.data.foundUser.isBoarded === 1 ||
    //       res.data.foundUser.isBoarded === true
    //     ) {
    //       // navigate to the dashboard route
    //       history.replace('/dashboard');
    //     }
    //   })
    //   .catch(err => console.log(err.message));

    // Uncomment to work locally
    axiosWithAuth()
      .post('http://localhost:5000/register', user)
      .then(res => {
        console.log(res.data);
        if (
          (res.data.flag && res.data.flag === 0) ||
          res.data.flag === false ||
          ((res.data && res.data.isBoarded === false) ||
            res.data.isBoarded === 0)
        ) {
          // navigate to the onboarding route
          history.replace('/onboarding');
        } else if (
          (res.data.flag && res.data.flag === 1) ||
          res.data.flag === true ||
          ((res.data && res.data.isBoarded === true) ||
            res.data.isBoarded === 1)
        ) {
          // navigate to the dashboard route
          history.replace('/dashboard');
        } else {
          this.login();
        }
      })
      .catch(err => console.log(err.message));
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');

    this.auth0.logout({
      returnTo: window.location.origin
    });

    // navigate to the home route
    setTimeout(() => {
      history.replace('/');
    }, 1000);
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}

export default Auth;

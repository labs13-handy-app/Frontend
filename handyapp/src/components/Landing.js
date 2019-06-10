import React, {Component} from 'react';
// import NavBar from './NavBar';

class Landing extends Component {
  login = () => {
    this.props.auth.login();
  };
  render() {
    return (
      <div className="container">
        <div className="carousel" />
        <div className="about-us">
          <h2>About us</h2>
          <h2>Contact Us</h2>
          <h3>Social Media Links</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            molestiae quidem eos soluta. Sunt beatae quisquam accusamus numquam!
            Aut, adipisci cum. Provident perspiciatis omnis quos fugit adipisci,
            nam earum corrupti?
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;

import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import logo from '../../img/logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #667761 30%, #545E56 90%)',
    // border: '1px solid red',
    '@media (max-width: 500px)': {background: '#667761'}
  },
  label: {
    textTransform: 'capitalize',
    color: '#EAE1DF',
    // border: '1px solid yellow',
    '@media (max-width: 500px)': {
      fontSize: '0.8rem',
      padding: '0rem'
    }
  },
  logo: {
    height: '2.2rem',
    '@media (max-width: 500px)': {height: '1.5rem'}
  },
  task: {
    textTransform: 'lowercase',
    border: '0.05rem solid #EAE1DF',
    color: '#545E56',
    background: '#EAE1DF',
    // border: '1px solid red',
    '&:hover': {
      color: '#EAE1DF',
      background: '#545E56'
    },
    '@media (max-width: 500px)': {display: 'none'}
  }
});

class NavBar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1}>
            <img className={classes.logo} src={logo} alt="handy-app-logo" />
          </Box>
          {/* ================================================================= */}
          {/* When the User is not logged in. */}
          {!localStorage.token && (
            <Box p={1}>
              <Button onClick={this.props.login} className={classes.label}>
                Login
              </Button>
            </Box>
          )}
          {/* ================================================================= */}
          {/*  When the User is logged in */}
          {localStorage.token && (
            <Box p={1}>
              <Button onClick={this.props.logout} className={classes.label}>
                Logout
              </Button>
            </Box>
          )}
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

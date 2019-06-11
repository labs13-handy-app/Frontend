import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px'
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '1.6rem'
  },
  title: {
    flexGrow: 2,
    fontSize: '2.4rem'
  },
  bg: {
    background: 'linear-gradient(45deg, #5659e1 30%, #484ac4 90%)'
  },
  task: {
    textTransform: 'lowercase',
    border: '1px solid #EAE1DF',
    color: '#00000',
    fontSize: '1.6rem'
  }
});

export class NavBar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.bg}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              handyApp
            </Typography>
            {!localStorage.token && (
              <Button
                color="inherit"
                onClick={this.props.login}
                className={classes.label}
              >
                Login
              </Button>
            )}
            {localStorage.token && (
              <>
                <Button
                  color="inherit"
                  variant="text"
                  onClick={this.props.logout}
                  className={classes.label}
                >
                  Logout
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
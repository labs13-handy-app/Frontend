import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme => ({
  root: {
    flexGrow: 1
  },
  label: {
    textTransform: 'capitalize'
  },
  title: {
    flexGrow: 2
  },
  bg: {
    background: 'linear-gradient(45deg, #667761 30%, #545E56 90%)'
  },
  task: {
    textTransform: 'lowercase',
    border: '1px solid #EAE1DF',
    color: '#00000'
  }
}));

export class NavBar extends Component{
  render() {
    const { classes }= this.props;

    return (
      <div className={classes.root}>
          <AppBar position="static" className={classes.bg}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                handyApp
              </Typography>
              <Button
                color="inherit"
                variant="text"
                onClick={this.props.login}
                className={classes.label}
              >
                Sign up
              </Button>
              <Button
                color="inherit"
                onClick={this.props.login}
                className={classes.label}
              >
                Login
              </Button>
              <Button
                color="inherit"
                onClick={this.props.login}
                className={classes.task}
              >
                Post a task
              </Button>
            </Toolbar>
          </AppBar>
     
      </div>
    );
  }
 
};
export default withStyles(styles)(NavBar);

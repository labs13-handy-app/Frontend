import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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

const NavBar = props => {
  // const { isAuthenticated } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* {isAuthenticated() && <h4>You are logged in!</h4>}
      {!isAuthenticated() && (
        <header>
          <div className="logo">
            <h2>Handyapp</h2>
          </div>
          <nav>
            <NavLink to="#" onClick={props.login}>
              Login
            </NavLink>
          </nav>
          
        </header>
      )} */}
     
        <AppBar position="static" className={classes.bg}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              handyApp
            </Typography>
            <Button
              color="inherit"
              variant="text"
              onClick={props.login}
              className={classes.label}
            >
              Sign up
            </Button>
            <Button
              color="inherit"
              onClick={props.login}
              className={classes.label}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={props.login}
              className={classes.task}
            >
              Post a task
            </Button>
          </Toolbar>
        </AppBar>
   
    </div>
  );
};
export default NavBar;

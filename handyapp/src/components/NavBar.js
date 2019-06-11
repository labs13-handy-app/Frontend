import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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
}));

const NavBar = props => {
  const {isAuthenticated, logged} = props;
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
          {!logged && !isAuthenticated() && (
            <Button
              color="inherit"
              onClick={props.login}
              className={classes.label}
            >
              Login
            </Button>
          )}
          {logged && isAuthenticated() && (
            <>
              <Button
                color="inherit"
                onClick={props.login}
                className={classes.task}
              >
                Post a task
              </Button>
              <Button
                color="inherit"
                variant="text"
                onClick={props.logout}
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
};

const mapStateToprops = ({tokenReducer}, props) => {
  return {
    logged: tokenReducer.isAuthenticated
  };
};

export default connect(
  mapStateToprops,
  {}
)(NavBar);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontSize:'1px'
  },
  title: {
    flexGrow: 1,
    fontSize:'0.6rem'
  },
  label: {
    textTransform: 'capitalize',
    fontSize:'0.7rem'
  },
  bg: {
    background: 'linear-gradient(45deg, #545E56 30%, #667761 90%)',
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
    alignSelf: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
 
}));

export default function BottomNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <AppBar position="static">
        <Toolbar className={classes.bg}>
      
          
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <Toolbar className={classes.bg}>
          <Typography variant="h6" className={classes.title}>
          © 2019 hanyApp. All rights reserved.
          </Typography>
          <Button color="inherit" className={classes.label}>Privacy</Button>
          <Button color="inherit" className={classes.label}>Cancellation Policy</Button>
          <Button color="inherit" className={classes.label}>Terms & Conditions</Button>
        </Toolbar>
      </AppBar>
     
      
    </div>
  );
}

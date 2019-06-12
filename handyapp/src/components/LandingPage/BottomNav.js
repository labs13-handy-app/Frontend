import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    fontSize: '1rem'
  },
  title: {
    flexGrow: 1,
    fontSize: '0.6rem',
    color: '#EAE1DF'
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '0.7rem',
    color: '#EAE1DF',
    // border: '1px solid yellow',
    '@media (max-width: 500px)': { fontSize: '0.6rem' }
  },
  footer: {
    background: 'linear-gradient(45deg, #667761 30%, #545E56 90%)',
    fontSize: '2.2rem',
    '@media (max-width: 500px)': { background: '#667761' }
  },
  icons: {
    background: 'linear-gradient(45deg, #667761 30%, #545E56  90%)',
    fontSize: '2.2rem',
    color: '#EAE1DF',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 500px)': { background: '#667761', fontSize: '1rem' }
  },
  social: {
    cursor: 'pointer',
    marginLeft: '0.5rem',
    '&:hover': {
      opacity: 0.6,
      transition: '0.3s'
    }
  }
});

class BottomNav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.icons}>
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              className={classes.social}
            />
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              className={classes.social}
            />
            <FontAwesomeIcon
              icon={['fab', 'youtube']}
              className={classes.social}
            />
          </Toolbar>
        </AppBar>

        <AppBar position="static">
          <Toolbar className={classes.footer}>
            <Typography variant="h6" className={classes.title}>
              © 2019 handyApp. All rights reserved.
            </Typography>
            <Button className={classes.label}>Privacy</Button>
            <Button className={classes.label}>Cancellation Policy</Button>
            <Button className={classes.label}>Terms & Conditions</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(withStyles(styles))(BottomNav);

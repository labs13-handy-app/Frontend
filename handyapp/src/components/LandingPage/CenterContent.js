import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    fontSize: '1rem',
    marginBottom: 100
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    background: '#EAE1DF'
  },
  social: {
    // border: '1px solid yellow',
    fontSize: '8rem',
    cursor: 'pointer',
    marginLeft: '0.5rem'
    // '&:hover': {
    //   opacity: 0.6,
    //   transition: '0.3s'
    // }
  }
});

class CenterContent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.icons}>
            <FontAwesomeIcon icon="check-square" className={classes.social} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(withStyles(styles))(CenterContent);

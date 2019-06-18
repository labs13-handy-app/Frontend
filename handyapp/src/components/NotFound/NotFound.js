import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(3)
  },
  text: {
    flexWrap: 'wrap',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 3
  },
  btn: {
    margin: theme.spacing(1)
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
});

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

class NotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.text}>
          <h1>Ooops...</h1>
          <p>404 - PAGE NOT FOUND</p>
          <p>We are sorry but the page you are looking for does not exist.</p>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          component={AdapterLink}
          to="/"
        >
          Go Home
          <HomeIcon className={classes.icon} />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(NotFound);

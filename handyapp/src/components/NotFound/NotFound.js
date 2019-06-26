import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ErrorImage from '../../img/errorimg.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh'
  },
  submit: {
    backgroundColor: '#70C55D',
    color: '#FFFFFF',
    fontWeight: 600,
    marginTop: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'hsl(120, 27%, 56%)',
      color: '#FFFFFF'
    }
  },
  image: {
    maxWidth: '100%',
    display: 'block',
    width: '668px',
    height: '398px'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#70C55D'
    },
    secondary: {
      main: '#B8E2AE'
    }
  },
  typography: { useNextVariants: true }
});

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

class NotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.root}>
          <Box mt={5} />
          <Typography variant="h3" gutterBottom>
            Ooops...
          </Typography>
          <Box mt={2} />
          <Typography variant="button" display="block" gutterBottom>
            We are sorry but the page you are looking for does not exist!
          </Typography>
          <img src={ErrorImage} alt="404" className={classes.image} />
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.submit}
            component={AdapterLink}
            to="/"
          >
            Go To HomePage
          </Button>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(NotFound);

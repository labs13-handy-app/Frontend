import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBid} from '../../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import 'react-router-modal/css/react-router-modal.css';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    backgroundColor: '#70C55D',
    color: '#FFFFFF',
    fontWeight: 600,
    marginTop: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'hsl(120, 27%, 56%)'
    }
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
  typography: {useNextVariants: true}
});

class AddNewBid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractor_id: parseInt(this.props.location.search.slice(15)),
      project_id: parseInt(this.props.location.pathname.slice(39)),
      price: '',
      time: '',
      materials_included: ''
    };
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = async e => {
    e.preventDefault();
    await this.props.addBid(
      this.state,
      alert(`The bid has been successfully added, Thank you!`)
    );
    this.props.history.push('/dashboard-contractor/projects');
    window.location.reload();
  };

  render() {
    console.log(this.props);
    const {classes} = this.props;
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <main className={classes.layout}>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Submit a bid
                </Typography>
                <form className={classes.form}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        onChange={this.handleChanges}
                        name="price"
                        value={this.state.price}
                        type="number"
                        label="Price"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        required
                        onChange={this.handleChanges}
                        name="time"
                        type="text"
                        value={this.state.time}
                        label="Hours"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={this.handleChanges}
                        type="text"
                        label="Materials Included"
                        value={this.state.materials_included}
                        name="materials_included"
                        margin="normal"
                        required
                        fullWidth
                        required
                      />
                    </Grid>
                  </Grid>
                </form>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  className={classes.submit}
                  onClick={this.onSubmit}
                >
                  Submit
                </Button>
              </Paper>
            </main>
            <Box mt={10} />
          </Container>
        </MuiThemeProvider>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {bids: state.bids};
};

//  export default connect(mapStateToProps,{ addBid})(AddNewBid);
export default connect(
  mapStateToProps,
  {addBid}
)(compose(withStyles(styles))(AddNewBid));

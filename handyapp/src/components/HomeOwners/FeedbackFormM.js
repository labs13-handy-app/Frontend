import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { addFeedback } from '../../actions';

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
      backgroundColor: '#FFFFFF',
      color: '#70C55D'
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
  typography: { useNextVariants: true }
});

class FeedbackFormM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      reviewer_name: '',
      contractor_id: props.id,
      recommend: '',
      rating: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              {/* <Typography variant="button" display="block" gutterBottom>
              Feedback Form
            </Typography> */}
              <Typography component="h1" variant="h5">
                Feedback Form
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                We would love to hear your thoughts, concerns or problems with
                anything so we can improve!
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} className={classes.textfield}>
                    <TextField
                      onChange={this.handleChanges}
                      label="Title"
                      name="title"
                      value={this.state.title}
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      rows="4"
                      onChange={this.handleChanges}
                      label="Description"
                      name="description"
                      value={this.state.description}
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={this.handleChanges}
                      label="Name"
                      name="reviewer_name"
                      value={this.state.reviewer_name}
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      onChange={this.handleChanges}
                      label="Rating"
                      name="rating"
                      value={this.state.rating}
                      type="number"
                      margin="normal"
                      fullWidth
                      autoFocus
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      onChange={this.handleChanges}
                      label="Would you recommend?"
                      name="recommend"
                      value={this.state.recommend}
                      margin="normal"
                      fullWidth
                      autoFocus
                      required
                    />
                  </Grid>
                </Grid>
              </form>
              <Button
                onClick={() =>
                  this.props.addFeedback(this.state, window.location.reload())
                }
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                className={classes.submit}
              >
                Submit
              </Button>
              {/* </div> */}
            </Paper>
          </main>
          <Box mt={10} />
        </Container>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => {
  return { feedback: state.feedback };
};

export default connect(
  mapStateToProps,
  { addFeedback }
)(compose(withStyles(styles))(FeedbackFormM));

import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {addFeedback} from '../../actions';
import Select from '@material-ui/core/Select';
// '@material-ui/core/styles';

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
  typography: {useNextVariants: true}
});

class FeedbackFormM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      reviewer_name: localStorage.firstName,
      contractor_id: props.id,
      recommend: '',
      rating: ''
    };
  }

  // componentDidMount() {
  //   const first_name = localStorage.getItem('first_name');
  //   this.setState({
  //     reviewer_name: first_name
  //   });
  // }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  render() {
    console.log(this.props);
    const {classes} = this.props;

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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // multiline
                      // rows="4"
                      onChange={this.handleChanges}
                      label="Description"
                      name="description"
                      value={this.state.description}
                      margin="normal"
                      required
                      fullWidth
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} />
                    {/* <Select
                      onChange={this.handleChanges}
                      label="Rating (out of 5)"
                      name="rating"
                      value={this.state.rating}
                      type="number"
                      margin="normal"
                      fullWidth
                      required
                    /> */}
                    <InputLabel htmlFor="categories-required">
                      Ratings*
                    </InputLabel>
                    <Select
                      value={this.state.rating}
                      onChange={this.handleChanges}
                      label="Rating (out of 5)"
                      name="rating"
                      type="number"
                      // margin="normal"
                      fullWidth
                      required
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} />
                    <InputLabel htmlFor="categories-required">
                      Would you recommend?*
                    </InputLabel>
                    <Select
                      onChange={this.handleChanges}
                      name="recommend"
                      value={this.state.recommend}
                      // margin="normal"
                      fullWidth
                      required
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={'yes'}>Yes</MenuItem>
                      <MenuItem value={'no'}>No</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </form>
              <Button
                onClick={() => {
                  this.props.addFeedback(
                    this.state,
                    alert('Feedback successfully added '),
                    this.props.history.push(
                      `/dashboard-homeowner/users/${
                        localStorage.userID
                      }/projects`
                    )
                  );
                }}
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
  return {feedback: state.feedback};
};

export default connect(
  mapStateToProps,
  {addFeedback}
)(compose(withStyles(styles))(FeedbackFormM));

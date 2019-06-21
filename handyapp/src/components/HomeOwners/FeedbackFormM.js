import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { addFeedback } from '../../actions';

const styles = theme => ({
  '@global': {
    // body: {
    //   backgroundColor: theme.palette.common.red
    // }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#70C55D',
    color: '#FFFFFF',
    fontWeight: 600,
    borderRadius: '20px',
    padding: '0.65em 2.6em',
    transition: 'all 0.5s',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#70C55D',
      border: '1px solid #70C55D'
    }
  },
  textfield: {
    // border: '1px solid red',
    // backgroundColor: '#ECF5EB'
    // color: '#FFFFFF'
  },
  '&focus': {
    // backgroundColor: '#70C55D'
  },
  '&label': {
    // color: 'red !important'
  }
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
      <Container component="main" maxWidth="sm">
        <div className={classes.paper}>
          <Typography variant="h6" gutterBottom>
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  onChange={this.handleChanges}
                  label="Would you recommend?"
                  name="recommend"
                  value={this.state.recommend}
                  variant="outlined"
                  fullWidth
                  autoFocus
                />
              </Grid>
            </Grid>
          </form>
          <Button
            onClick={() => this.props.addFeedback(this.state,window.location.reload())}
            type="submit"
            variant="contained"
            size="large"
            className={classes.submit}
          >
            Submit
          </Button>
        </div>
      </Container>
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

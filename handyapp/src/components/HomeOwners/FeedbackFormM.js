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
    body: {
      backgroundColor: theme.palette.common.white
    }
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
    margin: theme.spacing(3, 0, 2)
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
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Feedback
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField
               // multiline
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
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={this.handleChanges}
                  label="Your Name"
                  name="reviewer_name"
                  value={this.state.reviewer_name}
                  variant="outlined"
                  required
                  fullWidth
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={this.handleChanges}
                  label="Rating"
                  name="rating"
                  value={this.state.rating}
                  type="number"
                  variant="outlined"
                  required
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  onChange={this.handleChanges}
                  label="Would you recommend?"
                  name="recommend"
                  value={this.state.recommend}
                  variant="outlined"
                  required
                  fullWidth
                  autoFocus
                />
              </Grid>
            </Grid>
         
          </form>
          <Button
              onClick={() => this.props.addFeedback(this.state)}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
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

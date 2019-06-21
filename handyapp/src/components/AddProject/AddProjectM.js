import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { compose } from 'recompose';
import { addProject, addProjectPics } from '../../actions';
// import axiosWithAuth from '../../utils/AxiosAuthFD';

// import './AddProject.css';
const styles = theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid red'
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  input: {
    display: 'none'
  },

  rightIcon: {
    marginLeft: theme.spacing(1)
  }
});

class AddProjectM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        title: '',
        description: '',
        homeowner_id: this.props.user
          ? this.props.user.id
          : this.props.match.params.id,
        materials_included: 'no',
        images: []
      }
    };
  }

  onInputChange = e => {
    let { value } = e.target;
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        [e.target.id]: value
      }
    }));
  };

  onSubmit = async e => {
    e.preventDefault();

    await this.props.addProject(this.state.project);

    this.props.history.push(
      `/dashboard-homeowner/users/${this.props.match.params.id}/projects/`
    );
  };

  showWidget = widget => {
    widget.open();
  };

  render() {
    const { classes } = this.props;
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'sandhu',
        uploadPreset: 'clyrl6ow',
        tags: ['app']
      },
      (error, result) => {
        let { secure_url } = result.info;
        if (!error && result && result.event === 'success') {
          this.setState(prevState => ({
            project: {
              ...prevState.project,
              images: [...this.state.project.images, secure_url]
            }
          }));
        }
      }
    );
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add Project
            </Typography>
            <form className={classes.form} onSubmit={this.onSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={this.onInputChange}
                    type="text"
                    label="Title"
                    id="title"
                    value={this.state.project.title}
                    variant="outlined"
                    required
                    fullWidth
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={this.onInputChange}
                    type="text"
                    label="Description"
                    id="description"
                    value={this.state.project.description}
                    variant="outlined"
                    required
                    fullWidth
                    autoFocus
                    multiline
                    rows="4"
                  />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="outlined-button-file"
                    multiple
                    type="file"
                    onClick={() => {
                      this.showWidget(widget);
                    }}
                  />
                  <label htmlFor="outlined-button-file">
                    <Button
                      variant="outlined"
                      component="span"
                      className={classes.submit}
                    >
                      Upload Images
                      <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                  </label>
                </Grid>
              </Grid>
            </form>
            <Button
              onSubmit={this.onSubmit}
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
      </>
    );
  }
}

// export default connect(
//   null,
//   {addProject, addProjectPics}
// )(AddProject);

export default connect(
  null,
  { addProject, addProjectPics }
)(compose(withStyles(styles))(AddProjectM));

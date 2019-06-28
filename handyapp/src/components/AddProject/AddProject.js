import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {addProject, getServices} from '../../actions';
import upload from '../../img/Upload-images.svg';
// import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import {compose} from 'recompose';

import './AddProject.css';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
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
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#70C55D'
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
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

class AddProject extends Component {
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
        category: '',
        budget: '',
        images: []
      }
    };
  }

  componentDidMount() {
    this.props.getServices();

    this.setState(prevState => ({
      project: {
        ...prevState.project,
        categories: this.props.services.map(service => service.name)
      }
    }));
  }

  onInputChange = e => {
    let {value} = e.target;
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        [e.target.id]: value
      }
    }));
  };

  handleRadioChange = e => {
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        materials_included: e.target.value
      }
    }));
  };

  onSubmit = async e => {
    e.preventDefault();

    console.log(this.state.project);

    await this.props.addProject(this.state.project);
    const {description, title, budget, category} = this.state;

    this.props.history.push(
      `/dashboard-homeowner/users/${localStorage.userID}/projects/`
    );
  };

  showWidget = widget => {
    widget.open();
  };

  onSelectChange = e => {
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    const {services} = this.props;
    const options = services.map(service => {
      const label = service.name;
      const value = service.name;
      return {value, label};
    });

    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
        uploadPreset: `${process.env.REACT_APP_CLOUDINARY_PRESET}`,
        tags: ['app']
      },
      (error, result) => {
        let {secure_url} = result.info;
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
    const {classes} = this.props;
    return (
      <div className="Add">
        <h2>Post a Project</h2>
        <div className="AddProject">
          <form onSubmit={this.onSubmit}>
            <div className="form-items">
              <div className="form-item">
                <label htmlFor="title">What do you need to get done? *</label>
                <input
                  required
                  onChange={this.onInputChange}
                  type="text"
                  id="title"
                  value={this.state.project.title}
                  placeholder="This'll be the title of your task - e.g. Help move my sofa"
                />
              </div>

              <div className="core-info">
                <div className="radio">
                  <div className="form-item-radio">
                    <label>Are you providing the Materials? *</label>
                  </div>
                  <div className="checks">
                    <div className="form-item-check">
                      <label htmlFor="yes">
                        <input
                          className="box"
                          onChange={this.handleRadioChange}
                          checked={
                            this.state.project.materials_included === 'yes'
                          }
                          type="radio"
                          id="yes"
                          value="yes"
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-item-check">
                      <label htmlFor="no">
                        <input
                          className="box"
                          onChange={this.handleRadioChange}
                          checked={
                            this.state.project.materials_included === 'no'
                          }
                          type="radio"
                          id="no"
                          value="no"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="budget">
                  <div className="form-item">
                    <label htmlFor="title">Budget *</label>
                    <input
                      required
                      onChange={this.onInputChange}
                      type="text"
                      id="budget"
                      value={this.state.project.budget}
                      placeholder="$0"
                    />
                  </div>
                </div>
              </div>

              <div className="form-item">
                {/* <label htmlFor="category">
                  Select a category for your project
                </label> */}
                <Grid item xs={12}>
                  <FormControl
                    required
                    className={classes.formControl}
                    margin="normal"
                    fullWidth
                  >
                    <InputLabel htmlFor="categories-required">
                      Contractor Category
                    </InputLabel>
                    <Select
                      value={this.state.project.category}
                      onChange={this.onSelectChange}
                      name="category"
                      inputProps={{
                        id: 'categories-required'
                      }}
                      className={classes.selectEmpty}
                    >
                      {this.props.services &&
                        this.props.services.map(({id, name}) => {
                          return (
                            <MenuItem key={id} value={name}>
                              {name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Grid>
              </div>

              {/* <Select
                  onChange={this.onSelectChange}
                  options={options}
                  id="category"
                  value={this.state.project.category}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 4,
                    height: 20,
                    padding: 4,
                    colors: {
                      ...theme.colors,
                      primary25: '#3e9b1624',
                      primary: '#3f9b16'
                    }
                  })}
                /> */}

              <div className="form-item">
                <label htmlFor="description">What are the details? *</label>
                <textarea
                  required
                  onChange={this.onInputChange}
                  type="text"
                  id="description"
                  value={this.state.project.description}
                  placeholder="Be as specific as you can about what needs to be done"
                  maxLength={255}
                />
                <p className="character-counter">
                  {this.state.project.description.length}/255
                </p>
              </div>

              <div className="control">
                <div className="form-upload">
                  <div className="add-photos">
                    <button
                      className="upload"
                      type="file"
                      onClick={e => {
                        e.preventDefault();
                        this.showWidget(widget);
                      }}
                      accept="image/*"
                    >
                      <img src={upload} alt="camera" />
                    </button>
                    <p>Upload Images</p>
                  </div>
                </div>
                <button
                  className={
                    this.state.project.title.length > 0 &&
                    this.state.project.category.length > 0 &&
                    this.state.project.budget.length > 0 &&
                    this.state.project.description.length > 0
                      ? 'add-project'
                      : 'disable'
                  }
                  onSubmit={this.onSubmit}
                >
                  {this.props.started ? (
                    <Loader type="Oval" color="#fff" height="24" width="24" />
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({servicesReducer, addProjectReducer}, props) => {
  return {
    services: servicesReducer.services,
    started: addProjectReducer.started
  };
};

export default connect(
  mapStateToProps,
  {addProject, getServices}
)(compose(withStyles(styles))(AddProject));

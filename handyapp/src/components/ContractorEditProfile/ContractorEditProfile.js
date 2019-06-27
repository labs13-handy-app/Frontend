import React, { Component } from 'react';
import { connect } from 'react-redux';
import jsConvert from 'js-convert-case';
import NumberFormat from 'react-number-format';
import Loader from 'react-loader-spinner';
import Grid from '@material-ui/core/Grid';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { getToken, onBoarding as editUser, getServices } from '../../actions';
import './ContractorEditProfile.css';

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

class ContractorEditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: this.props.user ? this.props.user.first_name : '',
        last_name: this.props.user ? this.props.user.last_name : '',
        address: this.props.user ? this.props.user.address : '',
        phone_number: this.props.user ? this.props.user.phone_number : '',
        email: this.props.user ? this.props.user.email : '',
        avatar: this.props.user ? this.props.user.avatar : '',
        skills: this.props.user ? this.props.user.skills : '',
        experience: this.props.user ? this.props.user.experience : null,
        licenses: this.props.user ? this.props.user.licenses : ''
      }
    };
  }

  componentWillMount() {
    // this.props.getToken();
    this.props.getServices();
  }
  showWidget = widget => {
    widget.open();
  };

  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [e.target.id]: e.target.value
      }
    }));
  };

  onSelectChange = e => {
    e.persist();
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [e.target.name]: e.target.value
      }
    }));
  };

  onSubmit = async e => {
    e.preventDefault();

    await this.props.editUser(this.props.user.id, this.state.user);
    await this.props.history.push(`/dashboard-contractor/projects`);
    window.location.reload();
  };

  render() {
    const { classes } = this.props;
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
        uploadPreset: `${process.env.REACT_APP_CLOUDINARY_PRESET}`,
        tags: ['app']
      },
      async (error, result) => {
        let { secure_url } = result.info;
        if (!error && result && result.event === 'success') {
          await this.setState(prevState => ({
            user: {
              ...prevState.user,
              avatar: secure_url
            }
          }));
        }
      }
    );

    const {
      first_name,
      last_name,
      address,
      phone_number,
      email,
      skills,
      experience,
      licenses
    } = this.state.user;

    return (
      <div className="EditContractor">
        <h2>Edit Profile</h2>
        <div className="ContractorEditProfile">
          <form onSubmit={this.onSubmit}>
            <div className="contractor-form-content">
              <div className="name">
                <div className="contractor-form-item first-name">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    onChange={this.onChange}
                    value={jsConvert.toHeaderCase(first_name)}
                    id="first_name"
                  />
                </div>
                <div className="contractor-form-item last-name">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    onChange={this.onChange}
                    value={last_name}
                    id="last_name"
                  />
                </div>
              </div>
              <div className="contractor-form-item">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={email}
                  id="email"
                />
              </div>
              <div className="contractor-form-item">
                <label htmlFor="phone_number">Phone</label>
                <NumberFormat
                  onChange={this.onChange}
                  id="phone_number"
                  format="(###) ###-####"
                  mask="_"
                  placeholder="(000) 000-0000"
                  value={phone_number}
                />
              </div>
              <div className="contractor-form-item">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={address}
                  id="address"
                />
              </div>
              <div className="contractor-form-item">
                <Grid item xs={12}>
                  <FormControl
                    required
                    className={classes.formControl}
                    margin="normal"
                    fullWidth
                  >
                    <label htmlFor="skills-required">Contractor Category</label>
                    <Select
                      value={skills}
                      onChange={this.onSelectChange}
                      name="skills"
                      inputProps={{
                        id: 'skills-required'
                      }}
                      className={classes.selectEmpty}
                    >
                      {this.props.skills &&
                        this.props.skills.map(({ id, name }) => {
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
              <div className="contractor-form-item">
                <label htmlFor="experience">Experience</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={experience}
                  id="experience"
                />
              </div>
              <div className="contractor-form-item">
                <label htmlFor="licenses">Licenses</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={licenses}
                  id="licenses"
                />
              </div>
              <div className="_form-footer">
                <div className="contractor-form-item">
                  <div className="photo">
                    <button
                      className="_profile-image"
                      type="file"
                      onClick={e => {
                        e.preventDefault();
                        this.showWidget(widget);
                      }}
                    >
                      <i className="fas fa-camera" />
                    </button>
                    <p>Upload a profile image</p>
                  </div>
                </div>
                <button className="contractor-edit-profile" type="submit">
                  {this.props.started ? (
                    <Loader type="Oval" color="#FFF" height="24" width="24" />
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

const mapStateToProps = ({ servicesReducer }, props) => {
  return {
    skills: servicesReducer.services
  };
};

export default connect(
  mapStateToProps,
  { getToken, editUser, getServices }
)(compose(withStyles(styles))(ContractorEditProfile));

import React, {Component} from 'react';
import {connect} from 'react-redux';
import jsConvert from 'js-convert-case';
import {onBoarding, getToken} from '../../actions';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {compose} from 'recompose';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
    // border: '1px solid red'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#70C55D',
    color: '#FFFFFF',
    fontWeight: 600,
    borderRadius: '20px',
    //padding: '0.65em 2.6em',
    transition: 'all 0.5s',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#70C55D',
      // border: '1px solid #70C55D'
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
});

class ContractorForm extends Component {
  state = {
    user: {
      first_name: '',
      last_name: '',
      nickname: '',
      phone_number: '',
      address: '',
      skills: '',
      licenses: '',
      experience: ''
    },
    avatar: ''
  };

  componentWillMount() {
    this.props.getToken();
    const {user} = this.props;

    // user.account_type = localStorage.account_type;

    if (user) {
      this.setState({
        user: {
          first_name: user.nickname
            ? jsConvert.toHeaderCase(user.nickname)
            : '',
          last_name: user.last_name
            ? jsConvert.toHeaderCase(user.last_name)
            : '',
          nickname: user.nickname ? user.nickname : '',
          email: user.email ? user.email : '',
          phone_number: user.phone_number ? user.phone_number : '',
          address: user.address ? user.address : '',
          skills: user.skills ? user.skills : '',
          licenses: user.licenses ? user.licenses : '',
          experience: user.experience ? user.experience : ''
        }
      });
    }
  }

  onChange = e => {
    e.persist();

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [e.target.id]: e.target.value
      }
    }));
  };

  onSubmit = async e => {
    e.preventDefault();
    const account_type = localStorage.account_type;
    const user = {
      ...this.state.user,
      id: this.props.user.id,
      account_type,
      isBoarded: true
    };

    user.avatar = this.state.avatar;

    localStorage.setItem('account_type', 'contractor');
    localStorage.setItem('isBoarded', 'true');

    await this.props.onBoarding(this.props.user.id, user);

    if (localStorage.token && localStorage.account_type === 'contractor')
      this.props.history.push('/dashboard-contractor');
  };

  showWidget = widget => {
    widget.open();
  };

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
        uploadPreset: `${process.env.REACT_APP_CLOUDINARY_PRESET}`,
        tags: ['app']
      },
      (error, result) => {
        let {secure_url} = result.info;
        if (!error && result && result.event === 'success') {
          this.setState({
            avatar: secure_url
          });
        }
      }
    );
    if (!localStorage.token) {
      this.props.history.push('/');
    }

    const {classes} = this.props;

    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography variant="button" display="block" gutterBottom>
            Complete your profile
          </Typography>
          <form
            className={classes.form}
            onSubmit={this.onSubmit}
            id="user-onboarding"
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={this.onChange}
                  id="first_name"
                  type="text"
                  value={this.state.user.first_name}
                  variant="outlined"
                  fullWidth
                  label="First Name"
                  autoComplete="first_name"
                  autoFocus
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={this.onChange}
                  id="last_name"
                  type="text"
                  value={this.state.user.last_name}
                  label="Last Name"
                  autoComplete="last_name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.onChange}
                  id="email"
                  type="email"
                  value={this.state.user.email}
                  label="Email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.onChange}
                  id="phone_number"
                  type="number"
                  value={this.state.user.phone_number}
                  label="Phone Number"
                  autoComplete="phone_number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.onChange}
                  id="address"
                  value={this.state.user.address}
                  type="text"
                  label="Address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={this.onChange}
                  id="skills"
                  value={this.state.user.skills}
                  type="text"
                  label="Skills"
                  autoComplete="skills"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={this.onChange}
                  id="experience"
                  value={this.state.user.experience}
                  type="number"
                  label="Years of experience"
                  autoComplete="experience"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.onChange}
                  id="licenses"
                  value={this.state.user.licenses}
                  type="text"
                  label="License"
                  autoComplete="licenses"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Typography variant="button" display="block" gutterBottom>
                  Upload profile picture
                </Typography>
                <input
                  onClick={() => {
                    this.showWidget(widget);
                  }}
                  type="file"
                  accept="image/*"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.submit}
            >
              Next
            </Button>
          </form>
        </div>
        <Box mt={10} />
      </Container>
    );
  }
}

const mapStateToProps = ({tokenReducer}, props) => {
  return {
    user: tokenReducer.token
  };
};

export default connect(
  mapStateToProps,
  {onBoarding, getToken}
)(compose(withStyles(styles))(ContractorForm));

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {onBoarding, getToken} from '../../actions';
// // import {Field, reduxForm} from 'redux-form';

// class ContractorForm extends Component {
//   state = {
//     user: {
//       id: '',
//       first_name: '',
//       last_name: '',
//       isBoarded: false,
//       nickname: '',
//       phone_number: '',
//       account_type:
//         this.props.user && this.props.user.account_type
//           ? this.props.user.account_type
//           : '',
//       address: '',
//       skills: '',
//       licenses: '',
//       experience: ''
//     }
//   };

//   componentWillMount() {
//     this.props.getToken();
//     const {user} = this.props;
//     if (user) {
//       this.setState({
//         user: {
//           id: user.id,
//           first_name: user.nickname,
//           last_name: '',
//           isBoarded: false,
//           nickname: user.nickname,
//           email: user.email,
//           phone_number: '',
//           account_type: user.account_type,
//           address: '',
//           skills: '',
//           licenses: '',
//           experience: ''
//         }
//       });
//     }
//   }

//   onChange = e => {
//     e.persist();

//     this.setState(prevState => ({
//       user: {
//         ...prevState.user,
//         [e.target.id]: e.target.value
//       }
//     }));
//   };

//   onSubmit = async e => {
//     e.preventDefault();

//     const user = {
//       ...this.state.user,
//       isBoarded: true
//     };

//     localStorage.setItem('account_type', 'contractor');

//     await this.props.onBoarding(user.id, user);

//     // this.setState({
//     //   user: {
//     //     first_name: '',
//     //     last_name: '',
//     //     email: '',
//     //     phone_number: '',
//     //     address: '',
//     //     skills: '',
//     //     licenses: '',
//     //     experience: ''
//     //   }
//     // });
//     if (localStorage.token && localStorage.account_type === 'contractor')
//       this.props.history.push('/dashboard-contractor');
//   };

//   showWidget = widget => {
//     widget.open();
//   };

//   render() {
//     let widget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: 'sandhu',
//         uploadPreset: 'clyrl6ow',
//         tags: ['app']
//       },
//       (error, result) => {
//         let {secure_url} = result.info;
//         if (!error && result && result.event === 'success') {
//           this.setState({
//             avatar: secure_url
//           });

//           // const newUser = {
//           //   ...this.props.user,
//           //   avatar: this.state.avatar
//           // };

//           // this.props.onBoarding(this.props.user.id, newUser);
//         }
//       }
//     );
//     if (!localStorage.token) {
//       this.props.history.push('/');
//     }
//     return (
//       <form onSubmit={this.onSubmit} id="user-onboarding">
//         <div>
//           <label htmlFor="first_name">First Name</label>
//           <input
//             onChange={this.onChange}
//             id="first_name"
//             type="text"
//             value={this.state.user.first_name}
//             placeholder="Enter first name"
//           />
//         </div>
//         <div>
//           <label htmlFor="last_name">Last Name</label>
//           <input
//             onChange={this.onChange}
//             id="last_name"
//             type="text"
//             value={this.state.user.last_name}
//             placeholder="Enter last name"
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             onChange={this.onChange}
//             id="email"
//             type="email"
//             value={this.state.user.email}
//             placeholder="Enter email"
//           />
//         </div>
//         <div>
//           <label htmlFor="phone_number">Phone Number</label>
//           <input
//             onChange={this.onChange}
//             id="phone_number"
//             type="tel"
//             value={this.state.user.phone_number}
//             placeholder="Enter phone number"
//           />
//         </div>
//         <div>
//           <label htmlFor="address">Address</label>
//           <input
//             onChange={this.onChange}
//             id="address"
//             value={this.state.user.address}
//             type="text"
//             placeholder="Enter address"
//           />
//         </div>
//         <div>
//           <label htmlFor="skills">Skill</label>
//           <input
//             required
//             onChange={this.onChange}
//             id="skills"
//             value={this.state.user.skills}
//             type="text"
//             placeholder="Enter your area of expertise"
//           />
//         </div>
//         <div>
//           <label htmlFor="experience">Experience</label>
//           <input
//             required
//             onChange={this.onChange}
//             id="experience"
//             value={this.state.user.experience}
//             type="text"
//             placeholder="Years of experience"
//           />
//         </div>
//         <div>
//           <label htmlFor="licenses">License</label>
//           <input
//             required
//             onChange={this.onChange}
//             id="licenses"
//             value={this.state.user.licenses}
//             type="text"
//             placeholder="Enter license"
//           />
//         </div>

//         <h4>Upload profile picture</h4>
//         <input
//           onClick={() => {
//             this.showWidget(widget);
//           }}
//           type="file"
//           accept="image/*"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// const mapStateToProps = ({tokenReducer}, props) => {
//   return {
//     user: tokenReducer.token
//   };
// };

// export default connect(
//   mapStateToProps,
//   {onBoarding, getToken}
// )(ContractorForm);

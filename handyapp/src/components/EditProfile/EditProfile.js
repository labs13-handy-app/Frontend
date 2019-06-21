import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken, onBoarding as editUser } from '../../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { compose } from 'recompose';

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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#70C55D',
    color: '#FFFFFF',
    fontWeight: 600,
    borderRadius: '20px',
    transition: 'all 0.5s',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#70C55D'
      // border: '1px solid #70C55D'
    }
  }
});

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: this.props.user ? this.props.user.first_name : '',
        last_name: this.props.user ? this.props.user.last_name : '',
        address: this.props.user ? this.props.user.address : '',
        phone: this.props.user ? this.props.user.phone : '',
        email: this.props.user ? this.props.user.email : '',
        avatar: this.props.user ? this.props.user.avatar : ''
      }
    };
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

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.user);

    this.props.editUser(this.props.user.id, this.state.user);
    this.props.history.push(
      `/dashboard-homeowner/users/${this.props.user.id}/projects`
    );
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
    const { first_name, last_name, address, phone, email } = this.state.user;
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography variant="button" display="block" gutterBottom>
              Edit your profile
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
                    label="First Name"
                    id="first_name"
                    type="text"
                    value={first_name}
                    variant="outlined"
                    required
                    fullWidth
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={this.onChange}
                    id="last_name"
                    type="text"
                    value={last_name}
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
                    id="text"
                    type="email"
                    value={email}
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
                    id="address"
                    value={address}
                    type="text"
                    label="Address"
                    autoComplete="address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    onChange={this.onChange}
                    id="phone"
                    type="number"
                    value={phone}
                    label="Phone Number"
                    autoComplete="phone"
                  />
                </Grid>
              </Grid>
              {/* <button
                type="file"
                onClick={e => {
                  e.preventDefault();
                  this.showWidget(widget);
                }}
              /> */}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                className={classes.submit}
              >
                Save
              </Button>
            </form>
          </div>
          <Box mt={10} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ tokenReducer }, props) => {
  return {
    user: tokenReducer.token
  };
};

export default connect(
  null,
  { getToken, editUser }
)(compose(withStyles(styles))(EditProfile));

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {getToken, onBoarding as editUser} from '../../actions';

// class EditProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         first_name: this.props.user ? this.props.user.first_name : '',
//         last_name: this.props.user ? this.props.user.last_name : '',
//         address: this.props.user ? this.props.user.address : '',
//         phone: this.props.user ? this.props.user.phone : '',
//         email: this.props.user ? this.props.user.email : '',
//         avatar: this.props.user ? this.props.user.avatar : ''
//       }
//     };
//   }

//   showWidget = widget => {
//     widget.open();
//   };

//   onChange = e => {
//     e.persist();
//     this.setState(prevState => ({
//       user: {
//         ...prevState.user,
//         [e.target.id]: e.target.value
//       }
//     }));
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     console.log(this.state.user);

//     this.props.editUser(this.props.user.id, this.state.user);
//     this.props.history.push(
//       `/dashboard-homeowner/users/${this.props.user.id}/projects`
//     );
//     window.location.reload();
//   };

//   render() {
//     let widget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
//         uploadPreset: `${process.env.REACT_APP_CLOUDINARY_PRESET}`,
//         tags: ['app']
//       },
//       async (error, result) => {
//         let {secure_url} = result.info;
//         if (!error && result && result.event === 'success') {
//           await this.setState(prevState => ({
//             user: {
//               ...prevState.user,
//               avatar: secure_url
//             }
//           }));
//         }
//       }
//     );
//     const {first_name, last_name, address, phone, email} = this.state.user;
//     return (
//       <div>
//         <h2>Edit Profile</h2>
//         <div className="EditProfile">
//           <form onSubmit={this.onSubmit}>
//             <div className="user-form-content">
//               <div className="user-form-item">
//                 <label htmlFor="first-name">First Name</label>
//                 <input
//                   type="text"
//                   onChange={this.onChange}
//                   value={first_name}
//                   id="first-name"
//                 />
//               </div>
//               <div className="user-form-item">
//                 <label htmlFor="last-name">Last Name</label>
//                 <input
//                   type="text"
//                   onChange={this.onChange}
//                   value={last_name}
//                   id="last-name"
//                 />
//               </div>
//               <div className="user-form-item">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="text"
//                   onChange={this.onChange}
//                   value={email}
//                   id="email"
//                 />
//               </div>
//               <div className="user-form-item">
//                 <label htmlFor="address">Address</label>
//                 <input
//                   type="text"
//                   onChange={this.onChange}
//                   value={address}
//                   id="address"
//                 />
//               </div>
//               <div className="user-form-item">
//                 <label htmlFor="phone">Phone</label>
//                 <input
//                   type="text"
//                   onChange={this.onChange}
//                   value={phone}
//                   id="phone"
//                 />
//               </div>
//               <div className="user-form-item">
//                 <button
//                   type="file"
//                   onClick={e => {
//                     e.preventDefault();
//                     this.showWidget(widget);
//                   }}
//                 />
//               </div>
//               <button type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({tokenReducer}, props) => {
//   return {
//     user: tokenReducer.token
//   };
// };

// export default connect(
//   null,
//   {getToken, editUser}
// )(EditProfile);

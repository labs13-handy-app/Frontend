import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onBoarding, getToken} from '../../actions';
// Here and Below matrial ui styles
// import {makeStyles} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles, } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {compose} from 'recompose';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

// export default function HomeownerForms() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Hook</Button>;
// }

const styles = theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class HomeownerForm extends Component {
  state = {
    user: {
      first_name: '',
      last_name: '',
      nickname: '',
      email: '',
      phone_number: '',
      address: ''
    }
  };

  componentWillMount() {
    this.props.getToken();
    const {user} = this.props;

    if (user) {
      this.setState({
        user: {
          id: user.id,
          first_name: user.nickname,
          last_name: '',
          nickname: user.nickname,
          email: user.email,
          phone_number: '',
          address: ''
        },
        avatar: ''
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

  onSubmit = e => {
    e.preventDefault();
    const user = {
      ...this.state.user,
      isBoarded: true
    };

    user.avatar = this.state.avatar;

    this.props.onBoarding(user.id, user);

    console.log(this.props.user);

    if (this.props.user && this.props.user.account_type === 'homeowner') {
      this.props.history.push('/dashboard-homeowner');
    }
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
    const {classes} = this.props;

    console.log(this.props);
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    return (
      // matrail ui portion
      <Container component="main" maxWidth="xs">
        <form onSubmit={this.onSubmit} id="user-onboarding">
          {/* <div> */}
            {/* <label htmlFor="first_name">First Name</label>
            <input
              onChange={this.onChange}
              id="first_name"
              type="text"
              value={this.state.user.first_name}
              placeholder="Enter first name"
            /> */}
          {/* </div> */}
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={this.onChange}
                label="First Name"
                  id="first_name"
                  value={this.state.user.first_name}
                  variant="outlined"
                  required
                  fullWidth
                  autoFocus
                />
              </Grid>
              </Grid>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              onChange={this.onChange}
              id="last_name"
              type="text"
              value={this.state.user.last_name}
              placeholder="Enter last name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={this.onChange}
              id="email"
              type="email"
              value={this.state.user.email}
              placeholder="Enter email"
            />
          </div>
          <div>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              onChange={this.onChange}
              id="phone_number"
              type="tel"
              value={this.state.user.phone_number}
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              onChange={this.onChange}
              id="address"
              value={this.state.user.address}
              type="text"
              placeholder="Enter address"
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>

          <Button type="upload" variant="contained" className={classes.upload}>
            Upload Pictures
          </Button>

          {/* <Button
              onClick={() => this.props.addFeedback(this.state)}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button> */}
        </form>
      </Container>
      // End of container
    );
  }
}

const mapStateToProps = ({tokenReducer, onBoardingReducer}, props) => {
  return {
    user: tokenReducer.token,
    editedUser: onBoardingReducer.user
  };
};

export default connect(
  mapStateToProps,
  {onBoarding, getToken}
)(compose(withStyles(styles))(HomeownerForm));

/// Good Code below

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {onBoarding, getToken} from '../../actions';
// // Here and Below matrial ui styles
// // import {makeStyles} from '@material-ui/styles';
// import Button from '@material-ui/core/Button';
// // import TextField from '@material-ui/core/TextField';
// // import Grid from '@material-ui/core/Grid';
// // import Typography from '@material-ui/core/Typography';
// import { withStyles, withTheme } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { compose } from 'recompose';

// // const useStyles = makeStyles({
// //   root: {
// //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// //     border: 0,
// //     borderRadius: 3,
// //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
// //     color: 'white',
// //     height: 48,
// //     padding: '0 30px',
// //   },
// // });

// // export default function HomeownerForms() {
// //   const classes = useStyles();
// //   return <Button className={classes.root}>Hook</Button>;
// // }

// const styles = theme => ({
//   '@global': {
//     body: {
//       backgroundColor: withTheme
//     }
//   },
// });

// class HomeownerForm extends Component {
//   state = {
//     user: {
//       first_name: '',
//       last_name: '',
//       nickname: '',
//       email: '',
//       phone_number: '',
//       address: ''
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
//           nickname: user.nickname,
//           email: user.email,
//           phone_number: '',
//           address: ''
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

//   onSubmit = e => {
//     e.preventDefault();
//     const user = {
//       ...this.state.user,
//       isBoarded: true
//     };

//     this.props.onBoarding(user.id, user);

//     console.log(this.props.user);

//     if (this.props.user && this.props.user.account_type === 'homeowner') {
//       this.props.history.push('/dashboard-homeowner');
//     }
//   };

//   render() {
//     const { classes } = this.props;

//     console.log(this.props);
//     if (!localStorage.token) {
//       this.props.history.push('/');
//     }
//     return (
//       // matrail ui portion
//       <Container component="main" maxWidth="xs">
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

// <Button

//      type="submit">Submit

//      {/* type="upload">Upload Picture */}

//        </Button>

//        <Button

//  type="upload">Upload Picture

//   </Button>

//        {/* <Button
//               onClick={() => this.props.addFeedback(this.state)}
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Submit
//             </Button> */}

//       </form>
//       </Container>
//       // End of container

//     );
//   }
// }

// const mapStateToProps = ({tokenReducer, onBoardingReducer}, props) => {
//   return {
//     user: tokenReducer.token,
//     editedUser: onBoardingReducer.user
//   };
// };

// export default connect(
//   mapStateToProps,
//   {onBoarding, getToken}
// )(compose(withStyles(styles))(HomeownerForm));

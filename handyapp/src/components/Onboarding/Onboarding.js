// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {withStyles} from '@material-ui/core/styles';
// import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
// import {compose} from 'recompose';
// import Avatar from '@material-ui/core/Avatar';
// import Build from '@material-ui/icons/Build';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Home from '@material-ui/icons/Home';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';

// import {getToken as getUser, onBoarding as editUser} from '../../actions';

// const styles = theme => ({
//   root: {
//     height: '100vh'
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3)
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: '#70C55D',
//     width: '150px',
//     height: '150px',
//     cursor: 'pointer',
//     // border: '1px solid red',
//     '&:hover': {
//       backgroundColor: 'hsl(120, 27%, 56%)'
//     }
//   }
// });

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#70C55D'
//     },
//     secondary: {
//       main: '#B8E2AE'
//     }
//   },
//   typography: {useNextVariants: true}
// });

// class Onboarding extends Component {
//   state = {
//     user: '',
//     account_type: ''
//   };

//   componentWillMount() {
//     this.props.getUser();
//   }

//   componentDidMount() {}

//   handleHomeOwner = async () => {
//     await this.setState({
//       user: this.props.user,
//       account_type: 'homeowner'
//     });

//     localStorage.setItem('account_type', 'homeowner');

//     console.log(this.state.account_type);

//     const editedUser = {
//       ...this.state.user,
//       account_type: this.state.account_type
//     };

//     console.log(editedUser);

//     await this.props.editUser(editedUser.id, editedUser);

//     if (localStorage.account_type === 'homeowner')
//       this.props.history.push('/homeowner-onboarding');
//   };

//   handleContractor = async () => {
//     await this.setState({
//       user: this.props.user,
//       account_type: 'contractor'
//     });

//     localStorage.setItem('account_type', 'contractor');

//     const editedUser = {
//       ...this.state.user,
//       account_type: this.state.account_type
//     };
//     console.log(editedUser);
//     await this.props.editUser(editedUser.id, editedUser);

//     if (localStorage.account_type === 'contractor')
//       this.props.history.push('/contractor-onboarding');
//   };

//   render() {
//     if (!localStorage.token) {
//       this.props.history.push('/');
//     }
//     console.log(this.state);

//     const {classes} = this.props;

//     return (
//       <MuiThemeProvider theme={theme}>
//         <Grid container component="main" className={classes.root}>
//           <CssBaseline />
//           <Grid item xs={false} sm={4} md={7} className={classes.image} />
//           <Grid
//             item
//             xs={12}
//             sm={8}
//             md={5}
//             component={Paper}
//             elevation={6}
//             square
//           >
//             <div className={classes.paper}>
//               <Typography component="h1" variant="h5">
//                 Choose your account type
//               </Typography>
//               <Box mt={5} />
//               <Avatar className={classes.avatar}>
//                 <Home onClick={this.handleHomeOwner} fontSize="large" />
//               </Avatar>
//               <Typography variant="button" display="block" gutterBottom>
//                 Homeowner
//               </Typography>

//               <Box mt={4} />
//               <Avatar className={classes.avatar}>
//                 <Build onClick={this.handleContractor} fontSize="large" />
//               </Avatar>
//               <Typography variant="button" display="block" gutterBottom>
//                 Contractor
//               </Typography>
//             </div>
//           </Grid>
//         </Grid>
//       </MuiThemeProvider>
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
//   {getUser, editUser}
// )(compose(withStyles(styles))(Onboarding));

//---------------------------------//
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getToken as getUser, onBoarding as editUser} from '../../actions';

import Homeowner from '../../img/onbording-homeowner-img.png';
import Contractor from '../../img/onbording-contractor-img.png';

import './Onboarding.css';

class Onboarding extends Component {
  state = {
    user: '',
    account_type: ''
  };

  componentWillMount() {
    this.props.getUser();
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleHomeOwner = async () => {
    await this.setState({
      user: this.props.user,
      account_type: 'homeowner'
    });

    localStorage.setItem('account_type', 'homeowner');

    console.log(this.state.account_type);

    const editedUser = {
      ...this.state.user,
      account_type: this.state.account_type
    };

    await this.props.editUser(editedUser.id, editedUser);

    if (localStorage.account_type === 'homeowner')
      this.props.history.push('/homeowner-onboarding');
  };

  handleContractor = async () => {
    await this.setState({
      user: this.props.user,
      account_type: 'contractor'
    });

    localStorage.setItem('account_type', 'contractor');

    const editedUser = {
      ...this.state.user,
      account_type: this.state.account_type
    };

    await this.props.editUser(editedUser.id, editedUser);

    if (localStorage.account_type === 'contractor')
      this.props.history.push('/contractor-onboarding');
  };

  render() {
    localStorage.setItem('userID', this.props.user.id);
    // console.log(this.props);
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    console.log(this.state);
    return (
      <div className="Onboarding">
        <div className="accounts">
          <h2>
            Welcome to <span>Handyapp</span>
          </h2>
          <p>Choose your account type:</p>
          <div className="choose">
            <div className="homeowner">
              <button onClick={this.handleHomeOwner} className="homeowner-btn">
                <div className="account-image">
                  <img
                    src={Homeowner}
                    alt="homeowner-btn"
                    width="431px"
                    height="294px"
                  />
                </div>
                <div className="label">
                  <p>Homeowner</p>
                </div>
              </button>
            </div>
            <div className="contractor">
              <button
                onClick={this.handleContractor}
                className="contractor-btn"
              >
                <div className="account-image">
                  <img
                    src={Contractor}
                    alt="contractor-btn"
                    width="449px"
                    height="319px"
                  />
                </div>
                <div className="label">
                  <p>Contractor</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
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
  {getUser, editUser}
)(Onboarding);

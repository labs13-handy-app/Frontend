import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onBoarding, getToken} from '../../actions';
// Here and Below matrial ui styles
import {makeStyles} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

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

  onSubmit = e => {
    e.preventDefault();
    const user = {
      ...this.state.user,
      isBoarded: true
    };

    this.props.onBoarding(user.id, user);

    console.log(this.props.user);

    if (this.props.user && this.props.user.account_type === 'homeowner') {
      this.props.history.push('/dashboard-homeowner');
    }
  };

  render() {
    console.log(this.props);
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    return (
      <form onSubmit={this.onSubmit} id="user-onboarding">
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            onChange={this.onChange}
            id="first_name"
            type="text"
            value={this.state.user.first_name}
            placeholder="Enter first name"
          />
        </div>
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

        <button type="submit">Submit</button>
        <button type="upload">Upload Picture</button>
      </form>
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
)(HomeownerForm);

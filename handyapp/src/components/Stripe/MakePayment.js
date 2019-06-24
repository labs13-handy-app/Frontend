import React from 'react';
import axiosWithAuth from '../../utils/AxiosAuth';
import {getToken} from '../../actions';
import {connect} from 'react-redux';
import Payment from './Payment';


class MakePayment extends React.Component {
  componentDidMount() {
    this.props.getToken();
  }

  newPayment = payment => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_API_URL}/api/checkout/charge`, payment)
      .then(res => {
        this.props.history.push('./dashboard-homeowner');
      })
      .catch(err => console.log(err.message));
  };
  render() {
    if (this.props.user.id === undefined) {
      console.log(this.props.user);

      return (
        <>
          <h4>Loading...</h4>
        </>
      );
    } else {
      return (
        <div>
          <Payment user={this.props.user} newPayment={this.newPayment} />
        </div>
      );
    }
  }
}

const mapStateToProps = ({tokenReducer}, props) => {
  return {
    user: tokenReducer.token
  };
};
export default connect(
  mapStateToProps,
  {getToken}
)(MakePayment);

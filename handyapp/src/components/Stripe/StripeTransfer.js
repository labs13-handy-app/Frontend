import React from 'react';
// import axiosWithAuth from '../../utils/AxiosAuth';
import { getToken } from '../../actions';
import { connect } from 'react-redux';
import Transfer from './Transfer';
class StripeTransfer extends React.Component {
  componentDidMount() {
    this.props.getToken();
  }

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
          <Transfer user={this.props.user} newPayment={this.stripeTransfer} />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ tokenReducer }, props) => {
  return {
    user: tokenReducer.token
  };
};
export default connect(
  mapStateToProps,
  { getToken }
)(StripeTransfer);

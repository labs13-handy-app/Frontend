import React, {Component} from 'react';
import loading from './loading.svg';
import {connect} from 'react-redux';
import {paymentConnection} from '../../actions';

class StripeCallback extends Component {
  componentDidMount() {
    const getCode = new URLSearchParams(window.location.search);
    this.props.paymentConnection(getCode.get('code'), this.props.history)
  }

  render() {
    console.log(this.props);
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white'
    };

    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

const mapStateToProps = ({connectionReducer}, props) => {
  return {
    // code: connectionReducer.code
  };
};

export default connect(
  mapStateToProps,
  {paymentConnection}
)(StripeCallback);
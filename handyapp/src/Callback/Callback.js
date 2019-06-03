import React, {Component} from 'react';
import loading from './loading.svg';
import {connect} from 'react-redux';
import {getToken} from '../actions';

class Callback extends Component {
  componentWillUnmount() {
    const token = localStorage.getItem('token');
    const newToken = `Bearer ${token}`;
    this.props.getToken(newToken);
  }

  render() {
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
    console.log(this.props);

    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

const mapStateToProps = ({tokenReducer}, props) => {
  return {
    token: tokenReducer.token
  };
};

export default connect(
  mapStateToProps,
  {getToken}
)(Callback);

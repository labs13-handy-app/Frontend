import axiosWithAuth from '../utils/AxiosAuth';
import {PAYMENT_CONNECTION_START, PAYMENT_CONNECTION_SUCCESS, PAYMENT_CONNECTION_FAILURE} from './index';

export const paymentConnection = (code, history) => dispatch => {
    dispatch({type: PAYMENT_CONNECTION_START});
    return axiosWithAuth()
      .post('https://handy-app-api.herokuapp.com/api/checkout/connect',{code})
      .then(res => { history.push('dashboard-contractor')
        dispatch({type: PAYMENT_CONNECTION_SUCCESS, payload: res.data});
      })
      .catch(err => dispatch({type: PAYMENT_CONNECTION_FAILURE, payload: err.message}));
  };

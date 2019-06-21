import axiosWithAuth from '../utils/AxiosAuth';
import {PAYMENT_TRANSFER_START,
     PAYMENT_TRANSFER_SUCCESS, 
     PAYMENT_TRANSFER_FAILURE} from './index';

export const paymentTransfer = transfer => dispatch => {
    dispatch({type: PAYMENT_TRANSFER_START});
    return axiosWithAuth()
      .post('https://handy-app-api.herokuapp.com/api/checkout/transfer',transfer)
      .then(res => {
        dispatch({type: PAYMENT_TRANSFER_SUCCESS, payload: res.data});
      })
      .catch(err => dispatch({type: PAYMENT_TRANSFER_FAILURE, payload: err.message}));
  };

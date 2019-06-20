import axiosWithAuth from '../utils/AxiosAuth';
import {ADD_BID_START, ADD_BID_SUCCESS, ADD_BID_FAILURE} from '../actions';

export const addBid = bid => dispatch => {
  dispatch({type: ADD_BID_START});

  return axiosWithAuth()
    .post(`${process.env.REACT_APP_API_URL}/bids`, bid)
    .then(res => dispatch({type: ADD_BID_SUCCESS, payload: res.body}))
    .catch(err => dispatch({type: ADD_BID_FAILURE, payload: err.message}));
};

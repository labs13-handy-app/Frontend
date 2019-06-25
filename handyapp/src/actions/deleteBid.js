import axiosWithAuth from '../utils/AxiosAuth';

import {
  DELETE_BID_START,
  DELETE_BID_SUCCESS,
  DELETE_BID_FAILURE
} from '../actions';

export const deleteBid = id => dispatch => {
  dispatch({type: DELETE_BID_START});

  return axiosWithAuth()
    .delete(`${process.env.REACT_APP_API_URL}/bids/${id}`)
    .then(res => { 
      dispatch({type: DELETE_BID_SUCCESS, payload: res.data})})
    .catch(err =>
      dispatch({type: DELETE_BID_FAILURE, payload: err.message})
    );
};
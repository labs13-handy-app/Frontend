import axiosWithAuth from '../utils/AxiosAuth';
import {GET_TOKEN_START, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE} from './index';

export const getToken = token => dispatch => {
  dispatch({type: GET_TOKEN_START});
  axiosWithAuth()
    .post('https:/localhost:5000/register')
    .then(res => {
      dispatch({type: GET_TOKEN_SUCCESS, payload: res.data});
      localStorage.setItem('token', token);
    })
    .catch(err => dispatch({type: GET_TOKEN_FAILURE, payload: err.message}));
};

import axiosWithAuth from '../utils/AxiosAuth';
import {GET_TOKEN_START, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE} from './index';

export const getToken = token => dispatch => {
  dispatch({type: GET_TOKEN_START});

  // Comment code to work locally
  axiosWithAuth()
    .post('https://handy-app-api.herokuapp.com/register')
    .then(res => {
      dispatch({type: GET_TOKEN_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type: GET_TOKEN_FAILURE, payload: err.message}));

  /* Uncomment to work locally   */

  // axiosWithAuth()
  //   .post('http://localhost:5000/register')
  //   .then(res => {
  //     dispatch({type: GET_TOKEN_SUCCESS, payload: res.data});
  //   })
  //   .catch(err => dispatch({type: GET_TOKEN_FAILURE, payload: err.message}));
};

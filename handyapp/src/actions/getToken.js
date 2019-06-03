import axiosWithAuth from '../utils/AxiosAuth';
import {GET_TOKEN_START, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE} from './index';

export const getToken = () => dispatch => {
  dispatch({type: GET_TOKEN_START});
  return axiosWithAuth()
    .post('https://handy-app-api.herokuapp.com/register')
    .then(res => {
      dispatch({type: GET_TOKEN_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type: GET_TOKEN_FAILURE, payload: err.message}));
};

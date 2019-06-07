import axiosWithAuth from '../utils/AxiosAuth';
import {GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_FAILURE} from './index';

export const getUsers = user => dispatch => {
  dispatch({type: GET_USERS_START});

  return axiosWithAuth()
    .get('https://handy-app-api.herokuapp.com/users')
    .then(res => dispatch({type: GET_USERS_SUCCESS, payload: res.data}))
    .catch(e => dispatch({type: GET_USERS_FAILURE, payload: e.message}));
};

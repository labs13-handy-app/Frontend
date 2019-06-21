import axiosWithAuth from '../utils/AxiosAuth';
import {GET_USER_START, GET_USER_SUCCESS, GET_USER_FAILURE} from '.';

export const getUser = id => dispatch => {
  console.log(id);
  dispatch({type: GET_USER_START});

  return axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URL}/users/${id}`)
    .then(res => dispatch({type: GET_USER_SUCCESS, payload: res.data}))
    .catch(e => dispatch({type: GET_USER_FAILURE, payload: e.message}));
};

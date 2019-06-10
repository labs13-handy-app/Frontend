import axiosWithAuth from '../utils/AxiosAuth';
import {GET_PROJECT_BY_ID_START, GET_PROJECT_BY_ID_SUCCESS, GET_PROJECT_BY_ID_FAILURE} from './index';

export const getProjectById = id => dispatch => {
  dispatch({type: GET_PROJECT_BY_ID_START});

  return axiosWithAuth()
    .get(`https://handy-app-api.herokuapp.com/projects/${id}`)
    .then(res => dispatch({type: GET_PROJECT_BY_ID_SUCCESS, payload: res.data}))
    .catch(e => dispatch({type: GET_PROJECT_BY_ID_FAILURE, payload: e.message}));
};
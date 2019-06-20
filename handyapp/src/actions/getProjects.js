import axiosWithAuth from '../utils/AxiosAuth';
import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE
} from './index';

export const getProjects = projects => dispatch => {
  dispatch({type: GET_PROJECTS_START});

  return axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URL}/projects`)
    .then(res => dispatch({type: GET_PROJECTS_SUCCESS, payload: res.data}))
    .catch(e => dispatch({type: GET_PROJECTS_FAILURE, payload: e.message}));
};

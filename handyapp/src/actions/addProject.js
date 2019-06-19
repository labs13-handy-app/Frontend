import axiosWithAuth from '../utils/AxiosAuth';
import {
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE
} from '../actions';

export const addProject = project => dispatch => {
  dispatch({type: ADD_PROJECT_START});

  // return axiosWithAuth()
  //   .post('https://handy-app-api.herokuapp.com/projects', project)
  //   .then(res => dispatch({type: ADD_PROJECT_SUCCESS, payload: res.body}))
  //   .catch(err => dispatch({type: ADD_PROJECT_FAILURE, payload: err.message}));

  return axiosWithAuth()
    .post('http://localhost:5000/projects', project)
    .then(res => dispatch({type: ADD_PROJECT_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ADD_PROJECT_FAILURE, payload: err.message}));
};

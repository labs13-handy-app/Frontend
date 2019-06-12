import axiosWithAuth from '../utils/AxiosAuth';
import {
  EDIT_PROJECT_START,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE
} from '../actions';

export const editProject = id => project => dispatch => {
  dispatch({type: EDIT_PROJECT_START});

  return axiosWithAuth()
    .put(`https://handy-app-api.herokuapp.com/projects/${id}`, project)
    .then(res => dispatch({type: EDIT_PROJECT_SUCCESS, payload: id}))
    .catch(err =>
      dispatch({type: EDIT_PROJECT_FAILURE, payload: err.message})
    );
};
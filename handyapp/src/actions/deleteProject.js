import axiosWithAuth from '../utils/AxiosAuth';
import {
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE
} from '../actions';

export const deleteProject = id => dispatch => {
  dispatch({type: DELETE_PROJECT_START});

  return axiosWithAuth()
    .delete(`http://localhost:3000/projects/${id}`)
    .then(res => dispatch({type: DELETE_PROJECT_SUCCESS, payload: id}))
    .catch(err =>
      dispatch({type: DELETE_PROJECT_FAILURE, payload: err.message})
    );
};

import axiosWithAuth from '../utils/AxiosAuth';
import {getUserProjects} from '../actions';

import {
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE
} from '../actions';

export const deleteProject = id => dispatch => {
  dispatch({type: DELETE_PROJECT_START});

  return axiosWithAuth()
    .delete(`${process.env.REACT_APP_API_URL}/projects/${id}`)
    .then(res => dispatch({type: DELETE_PROJECT_SUCCESS, payload: res.data}))
    .catch(err =>
      dispatch({type: DELETE_PROJECT_FAILURE, payload: err.message})
    );
};

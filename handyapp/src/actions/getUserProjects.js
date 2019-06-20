import axiosWithAuth from '../utils/AxiosAuth';
import {
  GET_USER_PROJECTS_START,
  GET_USER_PROJECTS_SUCCESS,
  GET_USER_PROJECTS_FAILURE
} from '../actions';

export const getUserProjects = id => dispatch => {
  dispatch({
    type: GET_USER_PROJECTS_START
  });

  /*Comment to work locally   */
  return axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URL}/users/${id}`)
    .then(res =>
      dispatch({
        type: GET_USER_PROJECTS_SUCCESS,
        payload: res.data
      })
    )
    .catch(e =>
      dispatch({
        type: GET_USER_PROJECTS_FAILURE,
        payload: e.message
      })
    );
};

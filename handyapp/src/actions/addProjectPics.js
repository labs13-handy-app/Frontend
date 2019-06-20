import axiosWithAuth from '../utils/AxiosAuth';
import {
  ADD_PROJECT_PICS_START,
  ADD_PROJECT_PICS_SUCCESS,
  ADD_PROJECT_PICS_FAILURE
} from '../actions';

export const addProjectPics = (id, pictures) => dispatch => {
  dispatch({type: ADD_PROJECT_PICS_START});

  return axiosWithAuth()
    .post(`${process.env.REACT_APP_API_URL}/projects/upload`, pictures)
    .then(res => dispatch({type: ADD_PROJECT_PICS_SUCCESS, payload: res.body}))
    .catch(err =>
      dispatch({type: ADD_PROJECT_PICS_FAILURE, payload: err.message})
    );
};

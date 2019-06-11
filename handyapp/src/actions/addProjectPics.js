import axiosWithAuth from '../utils/AxiosAuth';
import {
  ADD_PROJECT_PICS_START,
  ADD_PROJECT_PICS_SUCCESS,
  ADD_PROJECT_PICS_FAILURE
} from '../actions';

export const addProjectPics = pictures => dispatch => {
  dispatch({type: ADD_PROJECT_PICS_START});

  return axiosWithAuth()
    .post('https://handy-app-api.herokuapp.com/projects/upload', pictures)
    .then(res => dispatch({type: ADD_PROJECT_PICS_SUCCESS, payload: res.body}))
    .catch(err => dispatch({type: ADD_PROJECT_PICS_FAILURE, payload: err.message}));
};
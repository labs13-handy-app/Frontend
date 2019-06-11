import axiosWithAuth from '../utils/AxiosAuth';
import {
  ADD_FEEDBACK_START,
  ADD_FEEDBACK_SUCCESS,
  ADD_FEEDBACK_FAILURE
} from '../actions';

export const addFeedback = feedback => dispatch => {
  dispatch({type: ADD_FEEDBACK_START});

  return axiosWithAuth()
    .post('https://handy-app-api.herokuapp.com/feedback', feedback)
    .then(res => dispatch({type: ADD_FEEDBACK_SUCCESS, payload: res.body}))
    .catch(err => dispatch({type: ADD_FEEDBACK_FAILURE, payload: err.message}));
};
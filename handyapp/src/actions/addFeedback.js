import axiosWithAuth from '../utils/AxiosAuth';
import {
  ADD_FEEDBACK_START,
  ADD_FEEDBACK_SUCCESS,
  ADD_FEEDBACK_FAILURE
} from '../actions';

export const addFeedback = (feedback, history) => dispatch => {
  dispatch({type: ADD_FEEDBACK_START});

  return axiosWithAuth()
    .post(`${process.env.REACT_APP_API_URL}/feedback`, feedback)
    .then(res => { window.location.reload()
      dispatch({type: ADD_FEEDBACK_SUCCESS, payload: res.body})
})
    .catch(err => dispatch({type: ADD_FEEDBACK_FAILURE, payload: err.message}));
};

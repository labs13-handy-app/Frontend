import axiosWithAuth from '../utils/AxiosAuth';
import {
  ADD_PROFILE_PIC_START,
  ADD_PROFILE_PIC_SUCCESS,
  ADD_PROFILE_PIC_FAILURE
} from '../actions';

export const addProfilePic = picture => dispatch => {
  dispatch({type: ADD_PROFILE_PIC_START});

  return axiosWithAuth()
    .post(`${process.env.REACT_APP_API_URL}/users/upload`, picture)
    .then(res => dispatch({type: ADD_PROFILE_PIC_SUCCESS, payload: res.body}))
    .catch(err =>
      dispatch({type: ADD_PROFILE_PIC_FAILURE, payload: err.message})
    );
};

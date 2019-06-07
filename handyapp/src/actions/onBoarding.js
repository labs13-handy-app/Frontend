import axiosWithAuth from '../utils/AxiosAuth';
import {
  ONBOARDING_START,
  ONBOARDING_SUCCESS,
  ONBOARDING_FAILURE
} from './index';

export const onBoarding = (id, user) => dispatch => {
  dispatch({type: ONBOARDING_START});
  axiosWithAuth()
    .put(`https://handy-app-api.herokuapp.com/users/${id}`, user)
    .then(res => {
      dispatch({type: ONBOARDING_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type: ONBOARDING_FAILURE, payload: err.message}));
};

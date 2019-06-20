import axiosWithAuth from '../utils/AxiosAuth';
import {
  GET_PROJECT_IMAGES_START,
  GET_PROJECT_IMAGES_SUCCESS,
  GET_PROJECT_IMAGES_FAILURE
} from '../actions';

export const getProjectImages = id => dispatch => {
  dispatch({type: GET_PROJECT_IMAGES_START});

  return axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URL}/projects/${id}`)
    .then(res =>
      dispatch({type: GET_PROJECT_IMAGES_SUCCESS, payload: res.data})
    )
    .catch(e =>
      dispatch({type: GET_PROJECT_IMAGES_FAILURE, paylaod: e.message})
    );
};

import axiosWithAuth from '../utils/AxiosAuth';
import {
  GET_PROJECT_IMAGES_START,
  GET_PROJECT_IMAGES_SUCCESS,
  GET_PROJECT_IMAGES_FAILURE
} from '../actions';

export const getProjectImages = id => dispatch => {
  dispatch({type: GET_PROJECT_IMAGES_START});

  // return axiosWithAuth()
  //   .get(`http://localhost:5000/projects/${id}`)
  //   .then(res =>
  //     dispatch({type: GET_PROJECT_IMAGES_SUCCESS, payload: res.data})
  //   )
  //   .catch(e =>
  //     dispatch({type: GET_PROJECT_IMAGES_FAILURE, paylaod: e.message})
  //   );

  return axiosWithAuth()
    .get(`https://handy-app-api.herokuapp.com/projects/${id}`)
    .then(res =>
      dispatch({type: GET_PROJECT_IMAGES_SUCCESS, payload: res.data})
    )
    .catch(e =>
      dispatch({type: GET_PROJECT_IMAGES_FAILURE, paylaod: e.message})
    );
};

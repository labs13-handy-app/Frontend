import {
  GET_SERVICES_START,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAILURE
} from './index';

import axiosWithAuth from '../utils/AxiosAuth';

export const getServices = () => dispatch => {
  dispatch({type: GET_SERVICES_START});

  return axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URL}/services`)
    .then(({data}) => dispatch({type: GET_SERVICES_SUCCESS, payload: data}))
    .catch(({message}) =>
      dispatch({type: GET_SERVICES_FAILURE, payload: message})
    );
};

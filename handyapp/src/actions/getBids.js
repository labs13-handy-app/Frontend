import axiosWithAuth from '../utils/AxiosAuth';
import {GET_BIDS_START, GET_BIDS_SUCCESS, GET_BIDS_FAILURE} from './index';

export const getBids = bids => dispatch => {
  dispatch({type: GET_BIDS_START});

  return axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URL}/bids`)
    .then(res => dispatch({type: GET_BIDS_SUCCESS, payload: res.data}))
    .catch(e => dispatch({type: GET_BIDS_FAILURE, payload: e.message}));
};

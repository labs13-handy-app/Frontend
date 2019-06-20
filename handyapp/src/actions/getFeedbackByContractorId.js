import axiosWithAuth from '../utils/AxiosAuth';
import {
  GET_FEEDBACK_BY_CONTRACTOR_ID_START,
  GET_FEEDBACK_BY_CONTRACTOR_ID_SUCCESS,
  GET_FEEDBACK_BY_CONTRACTOR_ID_FAILURE
} from './index';

export const getFeedbackByContractorId = id => dispatch => {
  dispatch({type: GET_FEEDBACK_BY_CONTRACTOR_ID_START});

  return axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URL}/feedback/contractor/${id}`)
    .then(res =>
      dispatch({type: GET_FEEDBACK_BY_CONTRACTOR_ID_SUCCESS, payload: res.data})
    )
    .catch(e =>
      dispatch({
        type: GET_FEEDBACK_BY_CONTRACTOR_ID_FAILURE,
        payload: e.message
      })
    );
};

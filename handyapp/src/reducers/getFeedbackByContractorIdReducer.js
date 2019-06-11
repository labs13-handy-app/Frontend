import {
    GET_FEEDBACK_BY_CONTRACTOR_ID_START, 
    GET_FEEDBACK_BY_CONTRACTOR_ID_SUCCESS, 
    GET_FEEDBACK_BY_CONTRACTOR_ID_FAILURE
  } from '../actions';
  
  const initialState = {
    feedback: [],
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const getFeedbackByContractorIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_FEEDBACK_BY_CONTRACTOR_ID_START:
        return {
          ...state,
          feedback: [],
          started: true,
          isCompleted: false,
          error: null
        };
      case GET_FEEDBACK_BY_CONTRACTOR_ID_SUCCESS:
        return {
          ...state,
          feedback: action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case GET_FEEDBACK_BY_CONTRACTOR_ID_FAILURE:
        return {
          ...state,
          feedback: null,
          started: false,
          isCompleted: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
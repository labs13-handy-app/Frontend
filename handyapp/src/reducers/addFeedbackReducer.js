import {
    ADD_FEEDBACK_START, 
    ADD_FEEDBACK_SUCCESS, 
    ADD_FEEDBACK_FAILURE
  } from '../actions';
  
  const initialState = {
    feedback: [],
    started: false,
    added: false,
    error: null
  };
  
  export const addFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FEEDBACK_START:
        return {
          ...state,
          feedback: [],
          started: true,
          added: false,
          error: null
        };
      case ADD_FEEDBACK_SUCCESS:
        return {
          ...state,
          feedback: action.payload,
          started: false,
          added: true,
          error: null
        };
      case ADD_FEEDBACK_FAILURE:
        return {
          ...state,
          feedback: null,
          started: false,
          added: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
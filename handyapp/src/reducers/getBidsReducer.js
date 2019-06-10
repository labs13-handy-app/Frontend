import {
    GET_BIDS_START, 
    GET_BIDS_SUCCESS, 
    GET_BIDS_FAILURE
  } from '../actions';
  
  const initialState = {
    bids: [],
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const getBidsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BIDS_START:
        return {
          ...state,
          bids: [],
          started: true,
          isCompleted: false,
          error: null
        };
      case GET_BIDS_SUCCESS:
        return {
          ...state,
          bids: action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case GET_BIDS_FAILURE:
        return {
          ...state,
          bids: null,
          started: false,
          isCompleted: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
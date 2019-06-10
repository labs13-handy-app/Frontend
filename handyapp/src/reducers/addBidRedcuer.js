import {
    ADD_BID_START, 
    ADD_BID_SUCCESS, 
    ADD_BID_FAILURE
  } from '../actions';
  
  const initialState = {
    bids: [],
    started: false,
    added: false,
    error: null
  };
  
  export const addBidReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BID_START:
        return {
          ...state,
          bids: [],
          started: true,
          added: false,
          error: null
        };
      case ADD_BID_SUCCESS:
        return {
          ...state,
          bids: action.payload,
          started: false,
          added: true,
          error: null
        };
      case ADD_BID_FAILURE:
        return {
          ...state,
          bids: null,
          started: false,
          added: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
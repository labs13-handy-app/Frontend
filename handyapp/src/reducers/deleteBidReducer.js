import {
    DELETE_BID_START, 
    DELETE_BID_SUCCESS, 
    DELETE_BID_FAILURE
  } from '../actions';
  
  const initialState = {
    bids: [],
    started: false,
    deleted: false,
    error: null
  };
  
  export const deleteBidReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_BID_START:
        return {
          ...state,
          bids: [],
          started: true,
          deleted: false,
          error: null
        };
      case DELETE_BID_SUCCESS:
        return {
          ...state,
          bids: action.payload,
          started: false,
          deleted: true,
          error: null
        };
      case DELETE_BID_FAILURE:
        return {
          ...state,
          bids: null,
          started: false,
          deleted: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
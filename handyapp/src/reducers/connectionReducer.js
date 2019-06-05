import {
    PAYMENT_CONNECTION_START,
    PAYMENT_CONNECTION_SUCCESS,
    PAYMENT_CONNECTION_FAILURE
  } from '../actions';
  
  const initialState = {
    connected: false,
    error: null
  };
  
  export const connectionReducer = (state = initialState, action) => {
    switch (action.type) {
      case PAYMENT_CONNECTION_START:
        return {
        connected: true,
          error: null
        };
      case PAYMENT_CONNECTION_SUCCESS:
        return {
        connected: false,
          error: null
        };
      case PAYMENT_CONNECTION_FAILURE:
        return {
        connected: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
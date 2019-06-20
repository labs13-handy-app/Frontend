import {
    PAYMENT_TRANSFER_START,
    PAYMENT_TRANSFER_SUCCESS,
    PAYMENT_TRANSFER_FAILURE
  } from '../actions';
  
  const initialState = {
    transfer: null,
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const paymentTransferReducer = (state = initialState, action) => {
    switch (action.type) {
      case PAYMENT_TRANSFER_START:
        return {
          ...state,
          transfer: [],
          started: true,
          isCompleted: false,
          error: null
        };
      case PAYMENT_TRANSFER_SUCCESS:
        return {
          ...state,
          transfer: action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case PAYMENT_TRANSFER_FAILURE:
        return {
          ...state,
          transfer: null,
          started: false,
          isCompleted: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
import {
  PAYMENT_CONNECTION_START,
  PAYMENT_CONNECTION_SUCCESS,
  PAYMENT_CONNECTION_FAILURE
} from '../actions';

const initialState = {
  connected: false,
  code:null,
  error: null
};

export const connectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_CONNECTION_START:
      return {
        ...state,
        connected: false,
        code:[],
        error: null
      };
    case PAYMENT_CONNECTION_SUCCESS:
      return {
        ...state,
        connected: true,
        code:action.payload,
        error: null
      };
    case PAYMENT_CONNECTION_FAILURE:
      return {
        ...state,
        connected: false,
        code:null,
        error: action.payload
      };
    default:
      return state;
  }
};

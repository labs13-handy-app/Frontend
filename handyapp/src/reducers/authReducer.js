import {REG_START, REG_SUCCESS, REG_FAILURE} from '../actions';

const initialState = {
  isRegistering: false,
  isRegistered: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REG_START:
      return {
        ...state,
        isRegistering: true,
        isRegistered: false,
        error: null
      };
    case REG_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isRegistered: true,
        error: null
      };
    case REG_FAILURE:
      return {
        ...state,
        isRegistering: false,
        isRegistered: false,
        error: action.payload
      };
    default:
      return state;
  }
};

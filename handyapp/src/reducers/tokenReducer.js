import {
  GET_TOKEN_START,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE
} from '../actions';

const initialState = {
  token: '',
  isAuthenticated: false,
  isGetting: false,
  error: null
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_START:
      return {
        ...state,
        isGetting: true,
        isAuthenticated: false,
        token: '',
        error: null
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        isGetting: false,
        token: action.payload,
        isAuthenticated: true,
        error: null
      };
    case GET_TOKEN_FAILURE:
      return {
        ...state,
        isGetting: false,
        token: '',
        error: action.payload,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

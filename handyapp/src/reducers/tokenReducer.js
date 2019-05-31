import {
  GET_TOKEN_START,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE
} from '../actions';

const initialState = {
  token: '',
  isGetting: false,
  error: null
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_START:
      return {
        isGetting: true,
        token: '',
        error: null
      };
    case GET_TOKEN_SUCCESS:
      return {
        isGetting: false,
        token: action.payload,
        error: null
      };
    case GET_TOKEN_FAILURE:
      return {
        isGetting: false,
        token: '',
        error: action.payload
      };
    default:
      return state;
  }
};

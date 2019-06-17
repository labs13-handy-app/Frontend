import {GET_USER_START, GET_USER_SUCCESS, GET_USER_FAILURE} from '../actions';

const initialState = {
  getUser: false,
  user: [],
  error: null
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        getUser: true,
        user: [],
        error: null
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUser: false,
        user: action.payload,
        error: null
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        getUser: false,
        user: [],
        error: action.payload
      };
    default:
      return state;
  }
};

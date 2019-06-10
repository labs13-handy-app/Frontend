import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../actions';

const initialState = {
  getUser: false,
  users: [],
  error: null
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        getUser: true,
        users: [],
        error: null
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        getUser: false,
        users: action.payload,
        error: null
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        getUser: false,
        users: [],
        error: action.payload
      };
    default:
      return state;
  }
};

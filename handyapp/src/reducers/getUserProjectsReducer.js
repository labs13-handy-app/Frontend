import {
  GET_USER_PROJECTS_START,
  GET_USER_PROJECTS_SUCCESS,
  GET_USER_PROJECTS_FAILURE
} from '../actions';

const intialState = {
  isGetting: false,
  projects: [],
  error: null
};

export const getUserProjectsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_USER_PROJECTS_START:
      return {
        ...state,
        isGetting: true,
        projects: [],
        error: null
      };
    case GET_USER_PROJECTS_SUCCESS:
      return {
        ...state,
        isGetting: false,
        projects: action.payload,
        error: null
      };
    case GET_USER_PROJECTS_FAILURE:
      return {
        ...state,
        isGetting: false,
        projects: [],
        error: action.payload
      };
    default:
      return state;
  }
};

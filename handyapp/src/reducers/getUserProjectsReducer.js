import {
  GET_USER_PROJECTS_START,
  GET_USER_PROJECTS_SUCCESS,
  GET_USER_PROJECTS_FAILURE,
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE
} from '../actions';

const intialState = {
  isGetting: false,
  projects: [],
  error: null,
  isDeleting: false
};

export const getUserProjectsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_USER_PROJECTS_START:
      return {
        ...state,
        isGetting: true,
        projects: [],
        error: null,
        isDeleting: false
      };
    case GET_USER_PROJECTS_SUCCESS:
      return {
        ...state,
        isGetting: false,
        projects: action.payload,
        error: null,
        isDeleting: false
      };
    case GET_USER_PROJECTS_FAILURE:
      return {
        ...state,
        isGetting: false,
        projects: [],
        error: action.payload,
        isDeleting: false
      };
    case DELETE_PROJECT_START:
      return {
        ...state,
        isGetting: false,
        isDeleting: true,
        projects: [],
        error: null
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        isGetting: false,
        isDeleting: false,
        projects: action.payload,
        error: null
      };
    case DELETE_PROJECT_FAILURE:
      return {
        ...state,
        isGetting: false,
        isDeleting: false,
        projects: [],
        error: action.payload
      };
    default:
      return state;
  }
};

import {
    EDIT_PROJECT_START, 
    EDIT_PROJECT_SUCCESS, 
    EDIT_PROJECT_FAILURE
  } from '../actions';
  
  const initialState = {
    projects: [],
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const editProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_PROJECT_START:
        return {
          ...state,
          projects: [],
          started: true,
          isCompleted: false,
          error: null
        };
      case EDIT_PROJECT_SUCCESS:
        return {
          ...state,
          projects: action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case EDIT_PROJECT_FAILURE:
        return {
          ...state,
          projects: null,
          started: false,
          isCompleted: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
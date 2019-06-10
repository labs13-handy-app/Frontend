import {
    GET_PROJECTS_START, 
    GET_PROJECTS_SUCCESS, 
    GET_PROJECTS_FAILURE
  } from '../actions';
  
  const initialState = {
    projects: [],
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const getProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PROJECTS_START:
        return {
          ...state,
          projects: [],
          started: true,
          isCompleted: false,
          error: null
        };
      case GET_PROJECTS_SUCCESS:
        return {
          ...state,
          projects: action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case GET_PROJECTS_FAILURE:
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
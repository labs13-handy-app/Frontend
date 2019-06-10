import {
    GET_PROJECT_BY_ID_START, 
    GET_PROJECT_BY_ID_SUCCESS, 
    GET_PROJECT_BY_ID_FAILURE
  } from '../actions';
  
  const initialState = {
    projects: [],
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const getProjectByIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PROJECT_BY_ID_START:
        return {
          ...state,
          projects: [],
          started: true,
          isCompleted: false,
          error: null
        };
      case GET_PROJECT_BY_ID_SUCCESS:
        return {
          ...state,
          projects: action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case GET_PROJECT_BY_ID_FAILURE:
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
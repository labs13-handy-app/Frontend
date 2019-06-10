import {
    ADD_PROJECT_START, 
    ADD_PROJECT_SUCCESS, 
    ADD_PROJECT_FAILURE
  } from '../actions';
  
  const initialState = {
    projects: [],
    started: false,
    added: false,
    error: null
  };
  
  export const addProjectReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PROJECT_START:
        return {
          ...state,
          projects: [],
          started: true,
          added: false,
          error: null
        };
      case ADD_PROJECT_SUCCESS:
        return {
          ...state,
          projects: action.payload,
          started: false,
          added: true,
          error: null
        };
      case ADD_PROJECT_FAILURE:
        return {
          ...state,
          projects: null,
          started: false,
          added: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
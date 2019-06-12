import {
    ADD_PROJECT_PICS_START, 
    ADD_PROJECT_PICS_SUCCESS, 
    ADD_PROJECT_PICS_FAILURE
  } from '../actions';
  
  const initialState = {
    pictures: [],
    started: false,
    added: false,
    error: null
  };
  
  export const addProjectPicsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PROJECT_PICS_START:
        return {
          ...state,
          pictures: [],
          started: true,
          added: false,
          error: null
        };
      case ADD_PROJECT_PICS_SUCCESS:
        return {
          ...state,
          pictures: action.payload,
          started: false,
          added: true,
          error: null
        };
      case ADD_PROJECT_PICS_FAILURE:
        return {
          ...state,
          pictures: null,
          started: false,
          added: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
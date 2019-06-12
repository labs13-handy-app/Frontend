import {
    ADD_PROFILE_PIC_START, 
    ADD_PROFILE_PIC_SUCCESS, 
    ADD_PROFILE_PIC_FAILURE
  } from '../actions';
  
  const initialState = {
    picture: [],
    started: false,
    added: false,
    error: null
  };
  
  export const addProfilePicReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PROFILE_PIC_START:
        return {
          ...state,
          picture: [],
          started: true,
          added: false,
          error: null
        };
      case ADD_PROFILE_PIC_SUCCESS:
        return {
          ...state,
          picture: action.payload,
          started: false,
          added: true,
          error: null
        };
      case ADD_PROFILE_PIC_FAILURE:
        return {
          ...state,
          picture: null,
          started: false,
          added: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
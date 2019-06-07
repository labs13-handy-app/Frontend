import {
    ONBOARDING_START,
    ONBOARDING_SUCCESS,
    ONBOARDING_FAILURE
  } from '../actions';
  
  const initialState = {
    account_type:'',
    address:'',
    phone_number:'',
    skills:'',
    experience:'',
    licenses:'',
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const onBoardingReducer = (state = initialState, action) => {
    switch (action.type) {
      case ONBOARDING_START:
        return {
          account_type:'',
          address:'',
          phone_number:'',
          skills:'',
          experience:'',
          licenses:'',
          started: true,
          isCompleted: false,
          error: null
        };
      case ONBOARDING_SUCCESS:
        return {
          account_type:action.payload,
          address:action.payload,
          phone_number:action.payload,
          skills:action.payload,
          experience:action.payload,
          licenses:action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case ONBOARDING_FAILURE:
        return {
          account_type:'',
          address:'',
          phone_number:'',
          skills:'',
          experience:'',
          licenses:'',
          started: false,
          isCompleted: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
import {
  ONBOARDING_START,
  ONBOARDING_SUCCESS,
  ONBOARDING_FAILURE
} from '../actions';

const initialState = {
  user: null,
  started: false,
  isCompleted: false,
  error: null
};

export const onBoardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONBOARDING_START:
      return {
        ...state,
        user: null,
        started: true,
        isCompleted: false,
        error: null
      };
    case ONBOARDING_SUCCESS:
      return {
        ...state,
        user: action.payload,
        started: false,
        isCompleted: true,
        error: null
      };
    case ONBOARDING_FAILURE:
      return {
        ...state,
        user: null,
        started: false,
        isCompleted: false,
        error: action.payload
      };
    default:
      return state;
  }
};

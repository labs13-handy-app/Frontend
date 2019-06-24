import {
  GET_SERVICES_START,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAILURE
} from '../actions';

const initialState = {
  isFetching: false,
  services: [],
  error: null
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES_START:
      return {
        ...state,
        isFetching: true,
        services: [],
        error: null
      };
    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        services: action.payload,
        error: null
      };
    case GET_SERVICES_FAILURE:
      return {
        ...state,
        isFetching: false,
        services: [],
        error: action.payload
      };
    default:
      return state;
  }
};

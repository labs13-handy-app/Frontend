import {
  GET_PROJECT_IMAGES_START,
  GET_PROJECT_IMAGES_SUCCESS,
  GET_PROJECT_IMAGES_FAILURE
} from '../actions';

const intialState = {
  isGetting: false,
  images: [],
  error: null
};

export const getProjectImagesReducer = (
  state = intialState,
  {type, payload}
) => {
  switch (type) {
    case GET_PROJECT_IMAGES_START:
      return {
        ...state,
        isGetting: true,
        images: [],
        error: null
      };
    case GET_PROJECT_IMAGES_SUCCESS:
      return {
        ...state,
        isGetting: false,
        images: payload,
        error: null
      };
    case GET_PROJECT_IMAGES_FAILURE:
      return {
        ...state,
        isGetting: false,
        images: [],
        error: payload
      };
    default:
      return state;
  }
};

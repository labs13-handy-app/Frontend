import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {tokenReducer} from './tokenReducer';
import {connectionReducer} from './connectionReducer';
import {usersReducer} from './usersReducer';
import {onBoardingReducer} from './onBoardingReducer';
import {getProjectsReducer} from './getProjectsReducer'
import {getBidsReducer} from './getBidsReducer'
//import {addBidReducer} from './addBidRedcuer'
//import {addProjectRedcuer} from './addProjectReducer'

export default combineReducers({
  tokenReducer,
  routing: routerReducer,
  form: formReducer,
  connectionReducer,
  usersReducer,
  onBoardingReducer,
  getProjectsReducer,
  getBidsReducer
});

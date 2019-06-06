import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {tokenReducer} from './tokenReducer';
import {connectionReducer} from './connectionReducer';
import {usersReducer} from './usersReducer';

export default combineReducers({
  tokenReducer,
  routing: routerReducer,
  form: formReducer,
  connectionReducer,
  usersReducer
});

import {combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { tokenReducer} from './tokenReducer';


// const store = createStore(rootReducer)


export default combineReducers({
  tokenReducer,
  routing: routerReducer,
form: formReducer,
});


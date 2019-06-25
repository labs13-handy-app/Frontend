import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {tokenReducer} from './tokenReducer';
import {connectionReducer} from './connectionReducer';
import {getUserReducer} from './getuserReducer';
import {onBoardingReducer} from './onBoardingReducer';
import {getProjectsReducer} from './getProjectsReducer';
import {getBidsReducer} from './getBidsReducer';
import {addBidReducer} from './addBidRedcuer';
import {addProjectReducer} from './addProjectReducer';
import {getProjectByIdReducer} from './getProjectByIdReducer';
import {getUserProjectsReducer} from './getUserProjectsReducer';
import {addFeedbackReducer} from './addFeedbackReducer';
import {getFeedbackByContractorIdReducer} from './getFeedbackByContractorIdReducer';
import {editProjectsReducer} from './editProjectsReducer';
import {addProfilePicReducer} from './addProfilePicReducer';
import {addProjectPicsReducer} from './addProjectPicsReducer';
import {getProjectImagesReducer} from './getProjectImagesReducer';
import {paymentTransferReducer} from './paymentTransferReducer';
import {servicesReducer} from './servicesReducers';
import {deleteBidReducer} from './deleteBidReducer'

export default combineReducers({
  tokenReducer,
  routing: routerReducer,
  form: formReducer,
  connectionReducer,
  getUserReducer,
  onBoardingReducer,
  getProjectsReducer,
  getBidsReducer,
  addBidReducer,
  addProjectReducer,
  getProjectByIdReducer,
  addFeedbackReducer,
  getUserProjectsReducer,
  getFeedbackByContractorIdReducer,
  editProjectsReducer,
  addProfilePicReducer,
  addProjectPicsReducer,
  getProjectImagesReducer,
  paymentTransferReducer,
  servicesReducer,
  deleteBidReducer
});

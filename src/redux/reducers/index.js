import {combineReducers} from 'redux';
import commonReducer from './commonReducer';
import authReducer from './authReducer';
import feedReducer from './feedReducer';
import userReducer from './userReducer';

export default combineReducers({
  common: commonReducer,
  auth: authReducer,
  feed: feedReducer,
  user: userReducer,
});
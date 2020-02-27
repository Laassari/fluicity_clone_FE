import userRducer from './userReducer';
import postReducer from './postReducer';
import { combineReducers } from 'redux';

export default combineReducers({ auth: userRducer, post: postReducer });

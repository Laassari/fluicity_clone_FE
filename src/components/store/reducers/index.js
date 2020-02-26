import userRducer from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({ auth: userRducer });

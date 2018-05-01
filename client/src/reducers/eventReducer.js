import { combineReducers } from 'redux';
import createNormalizedReducer from './creators/createNormalizedReducer';
import * as types from '../actions/types/eventActionTypes';


export default combineReducers(createNormalizedReducer('TASK'));
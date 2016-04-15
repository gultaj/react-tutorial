import { combineReducers } from 'redux';
import auth from './auth';
import post from './post';
import { routerReducer } from 'react-router-redux'

export default combineReducers({post, auth, routing: routerReducer});
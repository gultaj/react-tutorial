import { combineReducers } from 'redux';
import auth from './auth';
import post from './post';
import conversation from './conversation';
import app from './app';
// import app from './app';
import { routerReducer } from 'react-router-redux'

export default combineReducers({post, auth, conversation, app, routing: routerReducer});
import { combineReducers } from 'redux';
import auth from './auth';
import post from './post';
import conversation from './conversation';
import { routerReducer } from 'react-router-redux'

export default combineReducers({post, auth, conversation, routing: routerReducer});
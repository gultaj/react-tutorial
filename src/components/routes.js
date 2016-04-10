import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CommentBox from './comment/CommentBox';
import Login from './auth/Login';
import About from './pages/About';
import App from './App';
import {requireAuth} from 'middlewares/auth';

export default (

		<Route path='/' component={App} >
			<IndexRoute component={CommentBox} onEnter={requireAuth} />
			<Route path='/about' component={About}/>
			<Route path='/auth/login' component={Login}/>

		</Route>
);

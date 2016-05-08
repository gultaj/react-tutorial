import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CommentBox from './comment/CommentBox';
import Login from './auth/Login';
import Register from './auth/Register';
import About from './pages/About';
import App from 'containers/App';
import Conversation from 'containers/Conversation';
import Auth from 'containers/Auth';
import {requireAuth} from 'middlewares/auth';
import {conv} from 'middlewares/conv';

export default (

	<Route path='/' >
		<Route component={App}>
			<IndexRoute component={CommentBox} onEnter={requireAuth} />
			<Route path='/about' title='About' component={About}/>
			<Route path='/subscribes' component={About} />
			<Route path='messages'>
				<IndexRoute component={Conversation} onEnter={conv} />
				<Route path='(:user)' component={Conversation} />
			</Route>
			<Route path='/posts' component={About} />
		</Route>
		<Route path='/auth' component={Auth}>
			<Route path='login' component={Login} />
			<Route path='register' component={Register} />
		</Route>
	</Route>
);

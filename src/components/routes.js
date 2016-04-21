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

export default (

	<Route path='/' >
		<Route component={App}>
			<IndexRoute component={CommentBox} onEnter={requireAuth} />
			<Route path='/about' component={About}/>
			<Route path='/conversations/:user_id' component={Conversation} />
		</Route>
		<Route path='/auth' component={Auth}>
			<Route path='login' component={Login} />
			<Route path='register' component={Register} />
		</Route>
	</Route>
);

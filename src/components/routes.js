import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CommentBox from './comment/CommentBox';
import About from './pages/About';
import Menu from './menu';

export default (
	<Route path="/" component={Menu}>
		<IndexRoute component={CommentBox}/>
		<Route path="/about" component={About}/>
	</Route>
)

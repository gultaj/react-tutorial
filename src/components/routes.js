import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CommentBox from './comment/CommentBox';
import About from './pages/About';

export default (
	<Route path="/">
		<IndexRoute component={CommentBox}/>
		<Route path="/about" component={About}/>
	</Route>
)

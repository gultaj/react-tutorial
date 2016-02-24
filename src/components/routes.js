import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CommentBox from './comment/CommentBox';
import About from './pages/About';
import App from './App';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={CommentBox}/>
		<Route path="/about" component={About}/>
	</Route>
)

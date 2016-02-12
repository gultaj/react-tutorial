import React from 'react';
import {render} from 'react-dom';
import CommentBox from './CommentBox';

render(
	<CommentBox url='//reactcomments.dev/comments' />, 
	document.getElementById('app')
);
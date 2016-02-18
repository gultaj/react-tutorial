import React from 'react';
import {render} from 'react-dom';
import CommentBox from './components/comment/CommentBox';
import CommentStore from './stores/CommentStore';

render(
	<CommentBox url='//reactcomments.dev/comments' />, document.getElementById('app')
);
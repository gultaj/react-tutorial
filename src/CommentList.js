import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
	render() {
		var commentNodes = this.props.data.map((comment) => {
			return(
				<Comment author={comment.author.nickname} key={comment.id}>{comment.text}</Comment>
			);
		});
		return (
			<div className="CommentList">
				{commentNodes}
			</div>
		);
	}
}
import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
	render() {
		return (
			<div className="CommentList">
				{this.props.data.map((comment) =>
 					<Comment author={comment.author.nickname} key={comment.id}>{comment.text}</Comment>;
				)}
			</div>
		);
	}
}
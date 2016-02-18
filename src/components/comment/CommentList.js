import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
	render() {
		return (
			<div className="CommentList panel-body">
				{this.props.data.map((comment) => {
 					return (<Comment author={comment.author.nickname} key={comment.id}>{comment.text}</Comment>);
				})}
			</div>
		);
	}
}
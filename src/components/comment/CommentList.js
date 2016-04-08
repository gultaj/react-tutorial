import React, {Component, PropTypes} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
	static propTypes = {
		posts: PropTypes.array
	};

	componentWillMount() {
		this.props.actions.getAllPosts();
	}

	render() {
		const { posts } = this.props;
		if (posts.length) {
			return (
				<div className='CommentList panel-body'>
					{posts.map((comment) => {
						return (<Comment author={comment.author.nickname}  text={comment.text} key={comment.id} />);
					})}
				</div>
			);
		}
		return <div></div>;
	}
}

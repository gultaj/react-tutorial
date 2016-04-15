import React, {Component, PropTypes} from 'react';
import Comment from './Comment';

const styles = {
	WebkitColumnCount: 3,
	MozColumnCount: 3,
	ColumnCount: 3,
	WebkitColumnGap: 0,
	MozColumnGap: 0,
	ColumnGap: 0
};

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
				<div className='row' style={styles}>
					{posts.map((comment) => {
						return (<Comment author={comment.author.nickname}  text={comment.text} key={comment.id} />);
					})}
				</div>
			);
		}
		return <div></div>;
	}
}

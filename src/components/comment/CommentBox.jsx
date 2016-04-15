import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Preloader from '../Preloader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'actions/PostAction';

@connect(
	state => ({ post: state.post }),
	dispatch => ({ postActions: bindActionCreators(postActions, dispatch) })
)
export default class CommentBox extends Component {
	render() {
		const { post, postActions } = this.props;
		return (
			<div className='panel panel-default'>
				<div className='panel-heading'>
					<h1 className='panel-title'>Комментарии</h1>
				</div>
				<CommentList posts={post.posts} actions={postActions} />
				<Preloader visible={post.fetching} />
			</div>
		);
	}
}

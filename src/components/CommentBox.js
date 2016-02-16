import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import CommentAction from '../actions/CommentAction';
import CommentStore from '../stores/CommentStore';

export default class CommentBox extends Component {
	constructor() {
		super();
		this.state = {data: CommentStore.getAll()};
	}

	componentDidMount() {
	    CommentStore.on('change', this._onChange.bind(this));
	    CommentAction.updateAll();
	}

	componentWillUnmount() {
		CommentStore.removeListener('change', this._onChange.bind(this));
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Комментарии</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={CommentAction.create} />
			</div>
		);
	}

	_onChange() {
    	this.setState({data: CommentStore.getAll()});
  	}
}
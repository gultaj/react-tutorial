import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends Component {
	constructor() {
		super();
		this.state = {data: []};
	}

	componentDidMount() {
	    this.loadCommentsFromServer();
	}

	loadCommentsFromServer() {
		$.ajax({
	    	type: 'GET',
	    	url: this.props.url,
	    	dataType: 'jsonp',
	    	cache: false,
	    	success: result => { this.setState({data: result}); },
	    	error: (xhr, status, err) => { console.error(this.props.url, status, err.toString()); }
	    });	
	}

	handleCommentSubmit(comment) {
		$.ajax({
			type: 'POST',
			url: this.props.url,
			data: comment,
			success: result => { this.setState({data: result}); },
			error: (xhr, status, err) => { console.error(this.props.url, status, err.toString()); }
		});
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Комментарии</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
			</div>
		);
	}
}
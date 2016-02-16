import React, {Component} from 'react';
import CommentAction from '../actions/CommentAction';

export default class CommentForm extends Component {
	constructor() {
		super();
		this.state = {users: [], text: '', author: ''};
	}

	componentDidMount() {
	    this.loadUsersFromServer();
	}

	loadUsersFromServer() {
		$.ajax({
	    	type: 'GET',
	    	url: '//reactcomments.dev/users',
	    	dataType: 'jsonp',
	    	cache: false,
	    	success: result => { this.setState({users: result}); },
	    	error: (xhr, status, err) => { console.error(this.props.url, status, err.toString()); }
	    });	
	}

	handleTextChange(e) {
		this.setState({text: e.target.value});
	}

	handleAuthorChange(e) {
		this.setState({author: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		var author = parseInt(this.state.author.trim());
		var text = this.state.text.trim();
		if (!text || !author) return;
		this.props.onCommentSubmit({user_id: author, text: text});
		this.setState({author: '', text: ''});
	}

	render() {
		return (
			<form className="CommentForm" onSubmit={this.handleSubmit.bind(this)}>
				<select name="author" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}>
					<option value="0" key="0"></option>
					{ this.state.users.map(user => {
						return (<option value={user.id} key={user.id}>{user.nickname}</option>);
					} )}
				</select>
				<input type="text" value={this.state.text} onChange={this.handleTextChange.bind(this)} />
    			<input type="submit" value="Post" />
			</form>
		);
	}
}
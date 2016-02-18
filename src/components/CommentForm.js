import React, {Component} from 'react';
import CommentAction from '../actions/CommentAction';
import UserAction from '../actions/UserAction';
import UserStore from '../stores/UserStore';

export default class CommentForm extends Component {
	constructor() {
		super();
		this.state = {users: [], text: '', author: ''};
	}

	componentDidMount() {
	    UserStore.addChangeListener(this._onChange.bind(this));
	    UserAction.index();
	}

	componentWillUnmount() {
		UserStore.removeChangeListener(this._onChange.bind(this));
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
			<div className="panel-footer">
				<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
	    			<div className="input-group">
    					<select name="author" className="form-control w30" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}>
							<option value="0" key="0"></option>
							{ this.state.users.map(user => {
								return (<option value={user.id} key={user.id}>{user.nickname}</option>);
							} )}
						</select>
	      				<input type="text" className="form-control w70 ml-1" value={this.state.text} onChange={this.handleTextChange.bind(this)} />
      					<div className="input-group-btn">
      						<input type="submit" className="btn btn-success ml-2" value="Отправить" />
      					</div>
    				</div>
				</form>
			</div>
		);
	}

	_onChange() {
		this.setState({users: UserStore.getAll()});
	}
}
import React, {Component} from 'react';
import CommentAction from 'actions/CommentAction';
import UserAction from 'actions/UserAction';
import UserStore from 'stores/UserStore';

export default class CommentForm extends Component {
	constructor() {
		super();
		this.state = {users: [], text: '', author: ''};
	}

	componentDidMount() {
	    UserStore.addChangeListener(this._onChange.bind(this));
	    UserAction.index();
	    this._isMounted = true;
	}

	componentWillUnmount() {
		UserStore.removeChangeListener(this._onChange.bind(this));
		this._isMounted = false;
	}

	handleSubmit(e) {
		e.preventDefault();
		var author = parseInt(e.target.elements["author"].value);
		var text = e.target.elements["text"].value.trim();
		if (!text || !author) return;
		CommentAction.create({user_id: author, text: text});
		e.target.reset();
	}

	render() {
		return (
			<div className="panel-footer">
				<form className="commentForm" id="comment-form" onSubmit={this.handleSubmit.bind(this)}>
	    			<div className="input-group">
    					<select name="author" className="form-control w30">
							<option value="0" key="0"></option>
							{ this.state.users.map(user => {
								return (<option value={user.id} key={user.id}>{user.nickname}</option>);
							} )}
						</select>
	      				<input type="text" className="form-control w70 ml-1" name="text" />
      					<div className="input-group-btn">
      						<input type="submit" className="btn btn-success ml-2" value="Отправить" />
      					</div>
    				</div>
				</form>
			</div>
		);
	}

	_onChange() {
		if (this._isMounted)
			this.setState({users: UserStore.users});
	}
}
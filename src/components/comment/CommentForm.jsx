import React, {Component} from 'react';
// import CommentAction from 'actions/CommentAction';
// import UserAction from 'actions/UserAction';
// import UserStore from 'stores/UserStore';

export default class CommentForm extends Component {
	constructor() {
		super();
		this.state = {users: [], text: '', author: ''};
	}

	componentDidMount() {
		// UserStore.addChangeListener(this._onChange.bind(this));
		// UserAction.index();
	}

	componentWillUnmount() {
		// UserStore.removeChangeListener(this._onChange.bind(this));
	}

	handleSubmit(e) {
		e.preventDefault();
		let author = parseInt(e.target.elements['author'].value);
		let text = e.target.elements['text'].value.trim();
		if (!text || !author) return;
		// CommentAction.create({user_id: author, text: text});
		e.target.reset();
	}

	render() {
		return (
			<div className='panel-footer'>
				<form className='commentForm blue' id='comment-form' onSubmit={this.handleSubmit.bind(this)}>
					<div className='input-group'>
						<select name='author' className='form-control w30'>
							<option value='0' key='0'></option>
							{ this.state.users.map(user => {
								return (<option value={user.id} key={user.id}>{user.nickname}</option>);
							} )}
						</select>
						<input type='text' className='form-control blue w70 ml-1' name='text' />
						<div className='input-group-btn'>
							<input type='submit' className='btn blue btn-success ml-2' value='Отправить' />
						</div>
					</div>
				</form>
			</div>
		);
	}

	_onChange() {
		if (this.updater.isMounted(this)) {
			// this.setState({users: UserStore.users});
		}
	}
}

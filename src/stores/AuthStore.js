import BaseStore from './BaseStore';

var _currentUser = null;

class AuthStore extends BaseStore {
	login(user) {
		console.log(user);
		$.ajax({
			type: 'POST',
			url: 'http://reactcomments.dev/auth/login',
			data: user,
			success: result => { 
				_currentUser = result;    		
				this.emitChange();
			},
			error: (xhr, status, err) => { console.error(this.props.url, status, err.toString()); }
		});
	}

	get currentUser() {
		return _currentUser;
	}
}

export default new AuthStore();
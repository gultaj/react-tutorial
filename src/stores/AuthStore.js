import BaseStore from './BaseStore';
import { browserHistory } from 'react-router';

var _currentUser = null;

class AuthStore extends BaseStore {
	login(user) {
		var url = 'http://reactcomments.dev/auth/login';
		$.ajax({
			type: 'POST',
			url: url,
			data: user,
			success: result => { 
				_currentUser = result;    		
				this.emitChange();
				browserHistory.push('/');
			},
			error: (xhr, status, err) => { console.error(url, status, err.toString()); }
		});
	}

	logout() {
		var url = 'http://reactcomments.dev/auth/logout';
		$.ajax({
			type: 'POST',
			url: url,
			data: _currentUser,
			success: result => { 
				_currentUser = null;  
				this.emitChange();
				browserHistory.push('/auth/login');  		
			},
			error: (xhr, status, err) => { console.error(url, status, err.toString()); }
		});
	}

	get currentUser() {
		return _currentUser;
	}
}

export default new AuthStore();
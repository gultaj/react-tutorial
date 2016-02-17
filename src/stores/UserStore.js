import EventEmitter from 'events';
// import AppDispatcher from '../dispatcher/AppDispatcher';

var _users = []

var url = '//reactcomments.dev/users';

class UserStore extends EventEmitter {

	getAll() {
		return _users;
	}

	updateAll() {
		$.ajax({
	    	type: 'GET',
	    	url: url,
	    	dataType: 'jsonp',
	    	cache: false,
	    	success: result => { 
	    		_users = result;    		
				this.emit('change');
	    	},
	    	error: (xhr, status, err) => { console.error(url, status, err.toString()); }
	    });
	}
}

var instance = new UserStore();
export default instance;


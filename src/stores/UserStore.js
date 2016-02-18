import BaseStore from './BaseStore';

var _users = []

class UserStore extends BaseStore {

	getAll() {
		return _users;
	}

	index() {
		$.ajax({
	    	type: 'GET',
	    	url: '//reactcomments.dev/users',
	    	dataType: 'jsonp',
	    	cache: false,
	    	success: result => { 
	    		_users = result;    		
				this.emitChange();
	    	},
	    	error: (xhr, status, err) => { console.error(url, status, err.toString()); }
	    });
	}
}

export default new UserStore();


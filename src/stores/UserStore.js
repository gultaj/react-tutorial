import BaseStore from './BaseStore';

var _users = [];

class UserStore extends BaseStore {
	constructor() {
		super();
		this.url = '//reactcomments.dev/users';
	}

	get users() {
		return _users;
	}

	index() {
		$.ajax({
	    	type: 'GET',
	    	url: this.url,
	    	dataType: 'jsonp',
	    	cache: false,
	    	success: result => { 
	    		_users = result;    		
				this.emitChange();
	    	},
	    	error: (xhr, status, err) => { console.error(this.url, status, err.toString()); }
	    });
	}
}

export default new UserStore();


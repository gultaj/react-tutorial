import BaseStore from './BaseStore';

var _users = [];

class UserStore extends BaseStore {
	constructor() {
		super();
		this.url = '//reactcomments.dev/users';
		this.request = {};
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
	    	error: (xhr, status, err) => { console.error(this.url, status, err.toString()); }
	    }).done(result => { 
    		_users = result;    		
			this.emitChange();
    	});
	}
}

export default new UserStore();


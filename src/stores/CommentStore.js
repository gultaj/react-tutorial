import EventEmitter from 'events';

var _comments = [];

class CommentStore extends EventEmitter {

	getAll() {
		return _comments;
	}

	updateAll() {
		$.ajax({
	    	type: 'GET',
	    	url: '//reactcomments.dev/comments',
	    	dataType: 'jsonp',
	    	cache: false,
	    	success: result => { 
	    		_comments = result;    		
				this.emit('change');
	    	},
	    	error: (xhr, status, err) => { console.error(this.props.url, status, err.toString()); }
	    });
	}

	create(comment) {
		$.ajax({
	    	type: 'POST',
	    	url: '//reactcomments.dev/comments',
	    	data: comment,
	    	success: result => { 
	    		_comments = result;    		
				this.emit('change');
	    	},
	    	error: (xhr, status, err) => { console.error(this.props.url, status, err.toString()); }
	    });
	}
}

var instance = new CommentStore();
export default instance;


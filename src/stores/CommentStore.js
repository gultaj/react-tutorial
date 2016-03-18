import BaseStore from './BaseStore';

var _comments = [];

class CommentStore extends BaseStore {

	get comments() {
		return _comments;
	}

	index() {
		var url = '//reactcomments.dev/comments';
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'jsonp',
			cache: false,
			success: result => { 
				_comments = result;    		
				this.emitChange();
			},
			error: (xhr, status, err) => { console.error(url, status, err.toString()); }
		});
	}

	create(comment) {
		var url = '//reactcomments.dev/comments';
		$.ajax({
			type: 'POST',
			url: url,
			data: comment,
			success: result => { 
				_comments = result;    		
				this.emitChange();
			},
			error: (xhr, status, err) => { console.error(url, status, err.toString()); }
		});
	}
}

export default new CommentStore();


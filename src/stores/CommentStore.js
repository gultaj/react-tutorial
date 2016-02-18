import BaseStore from './BaseStore';

var _comments = [];

class CommentStore extends BaseStore {

	get comments() {
		return _comments;
	}

	index() {
		$.ajax({
			type: 'GET',
			url: '//reactcomments.dev/comments',
			dataType: 'jsonp',
			cache: false,
			success: result => { 
				_comments = result;    		
				this.emitChange();
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
				this.emitChange();
			},
			error: (xhr, status, err) => { console.error(this.props.url, status, err.toString()); }
		});
	}
}

export default new CommentStore();


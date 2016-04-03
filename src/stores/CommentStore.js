import BaseStore from './BaseStore';
import $ from 'jquery';

let _comments = [];

class CommentStore extends BaseStore {

	get comments() {
		return _comments;
	}

	index() {
		const url = '//reactcomments.dev/comments';
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
		const url = '//reactcomments.dev/comments';
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


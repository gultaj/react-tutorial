import AppDispatcher from '../dispatcher/AppDispatcher';

var CommentAction = {
	create: comment => {
		AppDispatcher.dispatch({
			actionType: 'comment.create',
			comment: comment
		});
	},
	updateAll: () => {
		AppDispatcher.dispatch({
			actionType: 'comment.updateAll'
		});
	}
}
export default CommentAction;
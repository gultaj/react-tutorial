import AppDispatcher from '../dispatcher/AppDispatcher';
import {CommentConst} from '../dispatcher/ConstDispatcher';

var CommentAction = {
	create: comment => {
		AppDispatcher.dispatch({
			actionType: CommentConst.CREATE,
			comment: comment
		});
	},
	index: () => {
		AppDispatcher.dispatch({
			actionType: CommentConst.INDEX
		});
	}
}

export default CommentAction;
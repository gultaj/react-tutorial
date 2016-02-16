import {Dispatcher} from 'flux';
import CommentStore from '../stores/CommentStore';

var AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
	switch (action.actionType) {
		case 'comment.create':
			CommentStore.create(action.comment);
			break;
		case 'comment.updateAll':
			CommentStore.updateAll();
			break;
		default:
			return true;
	}
	return true;
});


export default AppDispatcher;


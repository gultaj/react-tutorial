import {Dispatcher} from 'flux';
import CommentStore from '../stores/CommentStore';
import UserStore from '../stores/UserStore';

var AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
	switch (action.actionType) {
		case 'comment.create':
			CommentStore.create(action.comment);
			break;
		case 'comment.updateAll':
			CommentStore.updateAll();
			break;
		case 'user.updateAll':
			UserStore.updateAll();
			break;
		default:
			return true;
	}
});

export default AppDispatcher;


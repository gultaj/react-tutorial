import {Dispatcher} from 'flux';
import CommentStore from '../stores/CommentStore';
import UserStore from '../stores/UserStore';
import {CommentConst, UserConst} from './ConstDispatcher';

var AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
	switch (action.actionType) {
		case CommentConst.CREATE: CommentStore.create(action.comment); break;
		case CommentConst.INDEX: CommentStore.updateAll(); break;
		case UserConst.INDEX: UserStore.updateAll(); break;
		default: return true;
	}
});

export default AppDispatcher;


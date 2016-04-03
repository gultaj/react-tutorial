import {Dispatcher} from 'flux';
import CommentStore from 'stores/CommentStore';
import UserStore from 'stores/UserStore';
import AuthStore from 'stores/AuthStore';
import {CommentConst, UserConst, AuthConst} from './ConstDispatcher';

const AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
	switch (action.actionType) {
		case CommentConst.CREATE: CommentStore.create(action.comment); break;
		case CommentConst.INDEX: CommentStore.index(); break;
		case UserConst.INDEX: UserStore.index(); break;
		case AuthConst.LOGIN: AuthStore.login(action.user); break;
		case AuthConst.REGISTER: AuthStore.register(); break;
		case AuthConst.LOGOUT: AuthStore.logout(); break;
		default: return true;
	}
});

export default AppDispatcher;


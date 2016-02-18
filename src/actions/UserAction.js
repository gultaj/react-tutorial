import AppDispatcher from '../dispatcher/AppDispatcher';
import {UserConst} from '../dispatcher/ConstDispatcher';

var UserAction = {
	updateAll: () => {
		AppDispatcher.dispatch({
			actionType: UserConst.INDEX
		});
	}
}
export default UserAction;
import AppDispatcher from 'dispatcher/AppDispatcher';
import {UserConst} from 'dispatcher/ConstDispatcher';

const UserAction = {
	index: () => {
		AppDispatcher.dispatch({
			actionType: UserConst.INDEX
		});
	}
};
export default UserAction;

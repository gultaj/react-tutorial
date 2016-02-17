import AppDispatcher from '../dispatcher/AppDispatcher';

var UserAction = {
	updateAll: () => {
		AppDispatcher.dispatch({
			actionType: 'user.updateAll'
		});
	}
}
export default UserAction;
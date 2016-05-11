import {store} from 'index';
import {getLastId} from 'actions/ConversationAction';
import { browserHistory } from 'react-router';

export function conv(nextState) {
	if (!nextState.params.user) {
		store.dispatch(getLastId()).then((id) => {
			browserHistory.push('/messages/' + id);
		});
	}
}
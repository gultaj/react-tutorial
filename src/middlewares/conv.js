import {store} from 'index';
import {getLastId} from 'actions/ConversationAction';
import { browserHistory } from 'react-router';

export function conv() {
	store.dispatch(getLastId()).then((id) => {
		browserHistory.replace('/messages/' + id);
	});

}
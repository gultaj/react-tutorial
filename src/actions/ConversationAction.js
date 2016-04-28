import { CONVERSATION, URL_API } from '../constants/actionConstants';
import {store} from 'index';

export function getConversations() {
	return (dispatch) => {
		const state = store.getState();
		dispatch({ type: CONVERSATION.GET_BY_USER_REQUEST });
		fetch(`${URL_API}/conversations/${state.auth.user.id}`).then(response => response.json())
		.then(conversations => dispatch({
			type: CONVERSATION.GET_BY_USER_SUCCESS, 
			payload: conversations
		}))
		.catch(error => dispatch({
			type: CONVERSATION.GET_BY_USER_FAILURE,
			payload: error
		}));
	}
}

export function getMessages(conv_id) {
	return (dispatch) => {
		dispatch({type: CONVERSATION.GET_MESSAGES_REQUEST});

		fetch(`${URL_API}/messages/${conv_id}`).then(response => response.json())
		.then(messages => dispatch({
			type: CONVERSATION.GET_MESSAGES_SUCCESS, 
			payload: messages
		}))
		.catch(error => dispatch({
			type: CONVERSATION.GET_MESSAGES_FAILURE,
			payload: error
		}));
	}
}
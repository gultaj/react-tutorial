import { CONVERSATION, URL_API } from '../constants/actionConstants';
import { requestToken } from 'helpers/fetch';

export function getConversations() {
	return (dispatch) => {
		dispatch({ type: CONVERSATION.GET_BY_USER_REQUEST });

		return fetch(requestToken(`${URL_API}/conversations`)).then(response => response.json())
			.then(data => {
				if (data.success) {
					return dispatch({
						type: CONVERSATION.GET_BY_USER_SUCCESS, 
						payload: data.conversations
					});
				} else throw new Error(data.message);
			})
			.catch(error => dispatch({
				type: CONVERSATION.GET_BY_USER_FAILURE,
				payload: error
			}));
	}
}

export function getLastId() {
	return (dispatch) => {
		dispatch({type:CONVERSATION.GET_LAST_ID_REQUEST});

		return fetch(requestToken(`${URL_API}/conversations/last_id`)).then(response => response.json())
			.then(data => {
			if (data.success) {
				dispatch({type: CONVERSATION.GET_LAST_ID_SUCCESS});
				return data.conv_id;
			} else throw new Error(data.message);
		});
	}
}

export function getMessages(conv_id) {
	return (dispatch) => {
		dispatch({type: CONVERSATION.GET_MESSAGES_REQUEST});
		// console.log(conv_id);
		fetch(requestToken(`${URL_API}/messages/${conv_id}`)).then(response => response.json())
		.then(data => {
			if (data.success) {
				dispatch({
					type: CONVERSATION.GET_MESSAGES_SUCCESS, 
					payload: data.messages
				});
			} else throw new Error(data.message);
		})
		.catch(error => dispatch({
			type: CONVERSATION.GET_MESSAGES_FAILURE,
			payload: error
		}));
	}
}

export function reset() {
	return (dispatch) => dispatch({type: CONVERSATION.RESET});
}
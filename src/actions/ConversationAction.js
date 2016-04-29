import { CONVERSATION, URL_API } from '../constants/actionConstants';
import { requestToken } from 'helpers/fetch';

export function getConversations() {
	return (dispatch) => {
		dispatch({ type: CONVERSATION.GET_BY_USER_REQUEST });

		fetch(requestToken(`${URL_API}/conversations`)).then(response => response.json())
		.then(data => {
			if (data.success) {
				dispatch({
					type: CONVERSATION.GET_BY_USER_SUCCESS, 
					payload: data
				});
			} else throw new Error(data.message);
		})
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
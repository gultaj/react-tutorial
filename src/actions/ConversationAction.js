import { CONVERSATION, URL_API } from '../constants/actionConstants';

export function getConversations(user_id) {
	return (dispatch) => {
		dispatch({ type: CONVERSATION.GET_BY_USER_REQUEST });
		fetch(`${URL_API}/conversations/${user_id}`).then(response => response.json())
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
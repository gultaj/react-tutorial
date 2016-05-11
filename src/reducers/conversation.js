import { CONVERSATION } from '../constants/actionConstants';

export const initialState = {
	conversations: [],
	messages: [],
	fetching: false,
	errorMessage: {}
};

export default function conversation(state = initialState, action) {
	switch (action.type) {
		case CONVERSATION.GET_BY_USER_REQUEST:
		case CONVERSATION.GET_MESSAGES_REQUEST:
			return {...state, fetching: true, messages: []};
		case CONVERSATION.GET_BY_USER_SUCCESS:
			return {...state, conversations: action.payload, fetching: false};
		case CONVERSATION.GET_MESSAGES_SUCCESS:
			return {...state, messages: action.payload, fetching: false};
		case CONVERSATION.GET_MESSAGES_FAILURE:
		case CONVERSATION.GET_BY_USER_FAILURE:
			return {...state, errorMessage: action.payload, fetching: false};
		case CONVERSATION.RESET:
			return initialState;
		default:
			return state;
	}
}

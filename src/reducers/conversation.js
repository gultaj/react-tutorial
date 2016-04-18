import { CONVERSATION } from '../constants/actionConstants';

export const inititalState = {
	conversations: [],
	messages: [],
	fetching: false,
	errorMessage: {}
};

export default function conversation(state = inititalState, action) {
	switch (action.type) {
		case CONVERSATION.GET_BY_USER_REQUEST:
			return {...state, fetching: true};
		case CONVERSATION.GET_BY_USER_SUCCESS:
			return {...state, conversations: action.payload, fetching: false};
		case CONVERSATION.GET_BY_USER_FAILURE:
			return {...state, errorMessage: action.payload, fetching: false};
		default:
			return state;
	}
}

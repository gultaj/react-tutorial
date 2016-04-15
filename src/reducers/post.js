import { POST } from '../constants/actionConstants';

export const inititalState = {
	posts: [],
	fetching: false,
	errorMessage: {}
};

export default function post(state = inititalState, action) {
	switch (action.type) {
		case POST.GET_ALL_REQUEST:
			return {...state, fetching: true};
		case POST.GET_ALL_SUCCESS:
			return {...state, posts: action.payload, fetching: false};
		case POST.GET_ALL_FAILURE:
			return {...state, errorMessage: action.payload, fetching: false};
		default:
			return state;
	}
}

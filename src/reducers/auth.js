import { AUTH } from '../constants/actionConstants';

const inititalState = {
	currentUser: {
		id: 0,
		nickname: 'Unknown',
		token: ''
	},
	fetching: false,
	errorMessages: {}
};

export default function auth(state = inititalState, action) {
	switch (action.type) {
		case AUTH.LOGIN_REQUEST:
			return {...state, fetching: true};
		case AUTH.LOGIN_SUCCESS:
			return {...state, currentUser: action.payload, fetching: false};
		case AUTH.REGISTER_REQUEST:
			return {...state, fetching: true};
		case AUTH.REGISTER_SUCCESS:
			return {...state, fetching: false};			
		default:
			return state;
	}
}
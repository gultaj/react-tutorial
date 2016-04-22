import { AUTH } from '../constants/actionConstants';

export const inititalState = {
	user: {
		id: 0,
		nickname: 'Unknown',
		remember_token: ''
	},
	fetching: false,
	errorMessage: ''
};

export default function auth(state = inititalState, action) {
	switch (action.type) {
		case '@@router/LOCATION_CHANGE':
			return {...state, errorMessage: ''};
		case AUTH.LOGIN_REQUEST: case AUTH.REGISTER_REQUEST:
			return {...state, errorMessage: '', fetching: true};
		case AUTH.REGISTER_FAILURE: case AUTH.LOGIN_FAILURE:
			return {...state, errorMessage: action.payload, fetching: false};

		case AUTH.LOGIN_SUCCESS:
			return {...state, user: action.payload, fetching: false};
		case AUTH.REGISTER_SUCCESS:
			return {...state, fetching: false};	
		default:
			return state;
	}
}
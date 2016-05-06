import { AUTH } from '../constants/actionConstants';
// import Cookie from 'helpers/cookies';

export const initialState = {
	user: null,
	token: null,
	fetching: false,
	errorMessage: ''
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case '@@router/LOCATION_CHANGE':
			return {...state, errorMessage: ''};
		case AUTH.LOGIN_REQUEST: case AUTH.REGISTER_REQUEST:
			case AUTH.LOGOUT_REQUEST: case AUTH.GET_LOGGED_USER_REQUEST:
			return {...state, errorMessage: '', fetching: true};
		case AUTH.REGISTER_FAILURE: case AUTH.LOGIN_FAILURE: case AUTH.LOGOUT_FAILURE:
			return {...state, errorMessage: action.payload, fetching: false};

		case AUTH.SET_TOKEN:
			return {...state, token: action.payload};
		case AUTH.GET_LOGGED_USER_SUCCESS:
			return {...state, user: action.payload, fetching: false};
		case AUTH.LOGIN_SUCCESS:
			return {...state, user: action.payload, token: action.token, fetching: false};
		case AUTH.REGISTER_SUCCESS:
			return {...state, fetching: false};	
		case AUTH.LOGOUT_SUCCESS: case AUTH.RESET_STATE:
			return initialState;
		default:
			return state;
	}
}
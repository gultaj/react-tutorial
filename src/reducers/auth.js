import { AUTH } from '../constants/actionConstants';
// import Cookie from 'helpers/cookies';

export const inititalState = {
	user: null,
	token: null,
	fetching: false,
	errorMessage: ''
};

export default function auth(state = inititalState, action) {
	switch (action.type) {
		case '@@router/LOCATION_CHANGE':
			return {...state, errorMessage: ''};
		case [AUTH.LOGIN_REQUEST, AUTH.REGISTER_REQUEST, 
			AUTH.LOGOUT_REQUEST, AUTH.GET_LOGGED_USER_REQUEST]:
			return {...state, errorMessage: '', fetching: true};
		case [AUTH.REGISTER_FAILURE, AUTH.LOGIN_FAILURE, AUTH.LOGOUT_FAILURE]:
			return {...state, errorMessage: action.payload, fetching: false};

		case AUTH.SET_TOKEN:
			return {...state, token: action.payload};
		case AUTH.GET_LOGGED_USER_SUCCESS:
			return {...state, user: action.payload, fetching: false};
		case AUTH.LOGIN_SUCCESS:
			return {...state, user: action.payload, token: action.token, fetching: false};
		case AUTH.REGISTER_SUCCESS:
			return {...state, fetching: false};	
		case [AUTH.LOGOUT_SUCCESS, AUTH.RESET_STATE]:
			return inititalState;
		default:
			return state;
	}
}
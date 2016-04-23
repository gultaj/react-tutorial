import { AUTH } from '../constants/actionConstants';
import Cookie from 'helpers/cookies';

const token = Cookie.get('token') || localStorage.getItem('token');

const inititalState = {
	user: null,
	token: token,
	fetching: false,
	errorMessage: ''
};

export default function auth(state = inititalState, action) {
	switch (action.type) {
		case '@@router/LOCATION_CHANGE':
			return {...state, errorMessage: ''};
		case [AUTH.LOGIN_REQUEST, AUTH.REGISTER_REQUEST, AUTH.LOGOUT_REQUEST]:
			return {...state, errorMessage: '', fetching: true};
		case [AUTH.REGISTER_FAILURE, AUTH.LOGIN_FAILURE, AUTH.LOGOUT_FAILURE]:
			return {...state, errorMessage: action.payload, fetching: false};

		case AUTH.LOGIN_SUCCESS:
			return {...state, user: action.payload, token: action.token, fetching: false};
		case AUTH.REGISTER_SUCCESS:
			return {...state, fetching: false};	
		case AUTH.LOGOUT_SUCCESS:
			return inititalState;
		default:
			return state;
	}
}
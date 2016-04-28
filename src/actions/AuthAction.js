import { AUTH, URL_API } from '../constants/actionConstants';
import { browserHistory } from 'react-router';
import Cookie from 'helpers/cookies';

export function login(userData, redirectTo = '/') {
	return (dispatch) => {
		dispatch({ type: AUTH.LOGIN_REQUEST });

		fetch(`${URL_API}/auth/login`,{
			method: 'POST',
			body: userData
		}).then(response => response.json()).then(data => {
			if (data.success) {
				dispatch({
					type: AUTH.LOGIN_SUCCESS, 
					payload: data.user,
					token: data.user.remember_token
				});
				Cookie.set('token', data.user.remember_token, {path: '/'});
				if (userData.get('remember')) {
					localStorage.setItem('user', data.user);
				}
				browserHistory.replace(redirectTo);
			} else throw new Error(data.message); 
		}).catch(error => dispatch({
			type: AUTH.LOGIN_FAILURE,
			payload: error.message
		}));
	}
}

export function logout(data, redirectTo = '/auth/login') {
	return (dispatch) => {
		dispatch({ type: AUTH.LOGOUT_REQUEST });

		fetch(`${URL_API}/auth/logout`,{
			method: 'POST',
			body: data
		}).then(response => response.json()).then(data => {
			if (data.success) {
				dispatch({type: AUTH.LOGOUT_SUCCESS, fetching: false});
				Cookie.delete('token');
				localStorage.clear();
				browserHistory.replace(redirectTo);
			} else throw new Error(data.message); 
		}).catch(error => dispatch({
			type: AUTH.LOGOUT_FAILURE,
			payload: error.message
		}));
	}
}

export function register(userData, redirectTo = '/auth/login') {
	return (dispatch) => {
		dispatch({ type: AUTH.REGISTER_REQUEST });

		fetch(`${URL_API}/auth/register`, {
			method: 'POST',
			body: userData
		}).then(response => response.json()).then(data => {
			if (data.success) {
				dispatch({type: AUTH.REGISTER_SUCCESS});
				browserHistory.replace(redirectTo);
			} else throw new Error(data.message); 
		}).catch(error => dispatch({
			type: AUTH.REGISTER_FAILURE,
			payload: error.message
		}));
	}
}

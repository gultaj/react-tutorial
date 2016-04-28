import { APP, AUTH, URL_API } from '../constants/actionConstants';
import Cookie from 'helpers/cookies';
import { appConfig } from 'config/app';

export function setTitle(title = '') {
	return (dispatch) => {
		dispatch({type: APP.SET_TITLE, payload: title});
		document.title = title + ' | ' + appConfig.title;
	}
}

export function setInitialState() {
	return (dispatch) => {
		const token = Cookie.get('token') || localStorage.getItem('token');
		if (token) {
			dispatch({type: AUTH.SET_TOKEN, payload: token});
			dispatch({type: AUTH.GET_LOGGED_USER_REQUEST});

			fetch(`${URL_API}/auth/user`, {
				method: 'POST',
				body: new FormData({'Token': token})
			}).then(response => response.json()).then(data => {
				if (data.success) {
					dispatch({type: AUTH.GET_LOGGED_USER_SUCCESS, payload: data.user});
				} else {
					dispatch({type: AUTH.RESET_STATE});
				}
			}).catch(error => dispatch({
				type: APP.FAILURE,
				payload: error.message
			}));
		}
	}
}
import { AUTH, URL_API } from '../constants/actionConstants';
import { browserHistory } from 'react-router';

export function login(userData, redirectTo = null) {
	return (dispatch) => {
		dispatch({ type: AUTH.LOGIN_REQUEST });

		fetch(`${URL_API}/auth/login`,{
			method: 'POST',
			body: userData
		}).then(response => response.json()).then(data => {
			if (data.success) {
				dispatch({
					type: AUTH.LOGIN_SUCCESS, 
					payload: data.user
				});
				if (redirectTo) browserHistory.push(redirectTo);
			} else {
				throw new Error(data.message);
			}
		}).catch(error => dispatch({
			type: AUTH.LOGIN_FAILURE,
			payload: error.message
		}));
	}
}

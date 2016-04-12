import { AUTH, URL_API } from '../constants/actionConstants';
import { browserHistory } from 'react-router';

function checkStatus(response) {
	return response.json().then(json => 
		response.ok ? json : Promise.reject(json)
	);
}

export function login(userData, redirectTo = null) {
	return (dispatch) => {
		dispatch({ type: AUTH.LOGIN_REQUEST });

		fetch(`${URL_API}/auth/login`,{
			method: 'POST',
			body: userData
		}).then(checkStatus).then(user => {
			dispatch({
				type: AUTH.LOGIN_SUCCESS, 
				payload: user
			});
			if (redirectTo) browserHistory.push(redirectTo);
		}).catch(error => dispatch({
			type: AUTH.LOGIN_FAILURE,
			payload: Array.isArray(error) ? error : ['error']
		}));
	}
}

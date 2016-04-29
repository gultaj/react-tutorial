import { store } from 'index';


export function requestToken(url, data = {}) {
	const auth = store.getState().auth;
	var headers = Object.keys(data)['headers'] ? data.headers : new Headers();
	var request = new Request(url, {
		...data, 
		method: 'post',	
		headers: {
			...headers,
			'X-Token': auth.token
		}
	});
	return request;
}
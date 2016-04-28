import { store } from 'index';

export function dataToken() {
	var data = new FormData();
	data.append('token', store.getState().auth.token);
	return data;
}
import {store} from '../index';

export function requireAuth (nextState, replace) {
	console.log('is_auth');
	const state = store.getState()
	const isLoggedIn = Boolean(state.auth.token)
	if (!isLoggedIn) replace({
		pathname: '/auth/login',
		state: { nextPathname: nextState.location.pathname }
	});
}
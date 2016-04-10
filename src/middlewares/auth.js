import {store} from '../index';

export function requireAuth (nextState, replace) {
	console.log(store);
	const state = store.getState()
	const isLoggedIn = Boolean(state.auth.user.token)
	if (!isLoggedIn) replace({
		pathname: '/auth/login',
		state: { nextPathname: nextState.location.pathname }
	});
}
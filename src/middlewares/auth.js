import {store} from '../index';

export function requireAuth (nextState, replace) {
	const state = store.getState()
	const isLoggedIn = Boolean(state.auth.user.remember_token)
	if (!isLoggedIn) replace({
		pathname: '/auth/login',
		state: { nextPathname: nextState.location.pathname }
	});
}
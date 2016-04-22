// import { AUTH } from '../constants/actionConstants';

export const inititalState = {
	currentRoute: ''
};

export default function app(state = inititalState, action) {
	switch (action.type) {
		case '@@router/LOCATION_CHANGE':
			return {...state, currentRoute: window.location.pathname};
		default:
			return state;
	}
}
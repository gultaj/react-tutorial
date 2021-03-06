import { APP } from '../constants/actionConstants';

export const inititalState = {
	currentRoute: '',
	title: '',
	errorMessage: ''
};

export default function app(state = inititalState, action) {
	switch (action.type) {
		case '@@router/LOCATION_CHANGE':
			return {...state, currentRoute: window.location.pathname};
		case APP.FAILURE:
			return {...state, errorMessage: action.payload};
		case APP.SET_TITLE:
			return {...state, title: action.payload};
		default:
			return state;
	}
}
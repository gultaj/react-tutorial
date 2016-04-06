import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import { routerReducer } from 'react-router-redux'

const appReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default function configStore(inititalState) {
	let store = '';

	if (process.env.NODE_ENV === 'production') {
		store = createStore(
			appReducer, 
			inititalState,
			applyMiddleware(thunk)
		);
	} else {
		const DevTools = require('../utils/DevTools').default;
		store = createStore(
			appReducer, 
			inititalState,
			compose(
				applyMiddleware(thunk),
				DevTools.instrument()
			)
		);

		if (module.hot) {
			module.hot.accept('../reducers', () => {
				const nextRootReducer = require('../reducers').default;
				store.replaceReducer(nextRootReducer); 
			});
		}
	}

	return store;
}

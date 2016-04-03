import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'

export default function configStore(inititalState) {
	const store = createStore(
		rootReducer, 
		inititalState,
		applyMiddleware(thunk)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer); 
		});
	}

	return store;
}

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';
// import { routerReducer } from 'react-router-redux'
import logger from 'redux-logger';

const middlewares = process.env.NODE_ENV === 'production' ? [ thunk ] : [ thunk, logger() ]
// const appReducer = combineReducers({
//   ...reducers,
//   routing: routerReducer
// });

export default function configStore(inititalState) {
	const store = createStore(
		appReducer, 
		inititalState,
		applyMiddleware(...middlewares)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer); 
		});
	}

	return store;
}

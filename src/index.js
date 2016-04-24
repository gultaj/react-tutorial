import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configStore from './stores/configStore';
import routes from './components/routes';
import { syncHistoryWithStore } from 'react-router-redux';
import * as AppActions from 'actions/AppAction';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min.js';


export const store = configStore();

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(AppActions.setInitialState());

render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
	document.getElementById('app')
);

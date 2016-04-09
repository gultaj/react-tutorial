import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configStore from './stores/configStore';
import routes from './components/routes';
import { syncHistoryWithStore } from 'react-router-redux';
// import 'materialize-css/dist/css/materialize.min.css';

const store = configStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
	document.getElementById('app')
);

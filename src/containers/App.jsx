import React, { Component } from 'react';
import NavBar from './NavBar';
import Menu from 'components/menu/Menu';
import {Link} from 'react-router';
import { store } from 'index';
import * as AppActions from 'actions/AppAction';
// import { connect } from 'react-redux';

const styles = {
	wrapper: {
	    position: 'absolute',
    	top: 64,
    	width: '100%'
	},
	menu: {
		position: 'fixed',
    	zIndex: 998,
    	paddingLeft: 0
	},
	collection: {
		border: 'none'
	}
};

// @connect(null, dispatch => ({ authActions: bindActionCreators(authActions, dispatch) }))
export default class App extends Component {
	// componentWillMount() {
	//     store.dispatch(AppActions.setInitialState());
	// }
	render() {
		const { location } = this.props;
		return (
			<div className='wrapper'>
				<NavBar />		
				<div className='row' style={styles.wrapper}>
					<div className='col m2 fixed' style={styles.menu}>
						<Menu currentRoute={location.pathname} />
					</div>
					<div className='col m10 offset-m2'>
						<div className='container'>{this.props.children}</div>
					</div>
				</div>
			</div>
		);
	}
}

	
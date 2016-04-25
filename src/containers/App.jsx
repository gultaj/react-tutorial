import React, { Component } from 'react';
import NavBar from './NavBar';
import Menu from 'components/menu/Menu';
import * as AppActions from 'actions/AppAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

@connect(null, dispatch => ({ appActions: bindActionCreators(AppActions, dispatch) }) )
export default class App extends Component {
	static propTypes = {
		children: React.PropTypes.node,
		appActions: React.PropTypes.object
	};

	render() {
		const { appActions } = this.props;
		// const children = React.Children.map(this.props.children,
		// 	(child) => React.cloneElement(child, { appActions: appActions })
		// );
		return (
			<div className='wrapper'>
				<NavBar />		
				<div className='row' style={styles.wrapper}>
					<div className='col m2 fixed' style={styles.menu}>
						<Menu actions={appActions} />
					</div>
					<div className='col m10 offset-m2'>
						<div className='container'>{this.props.children}</div>
					</div>
				</div>
			</div>
		);
	}
}

	
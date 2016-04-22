import React, { Component } from 'react';
import NavBar from './NavBar';
import Menu from 'components/menu/Menu';
import {Link} from 'react-router';
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

export default class App extends Component {
	componentWillMount() {
	    console.log('mount')  ;
	}
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

	
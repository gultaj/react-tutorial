import React, { Component } from 'react';
// import NavBar from './menu/NavBar';
import {Link} from 'react-router';
// import { connect } from 'react-redux';

const styles = {
	navbar: {
		position: 'fixed',
    	zIndex: 999
	},
	wrapper: {
	    position: 'absolute',
    	top: 64,
    	width: '100%'
	}
};

export default class App extends Component {
	render() {
		return (
			<div className='wrapper'>
							
				<nav className='blue' style={styles.navbar}>
					<div className='nav-wrapper'>
						<a className='btn-floating btn-large waves-effect blue z-depth-0'><i className='tiny material-icons'>menu</i></a>	
						<a href='#' className='brand-logo'>Logo</a>

						<ul id='nav-mobile' className='right hide-on-med-and-down'>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/about'>About</Link></li>
							<li><a href='badges'>Components</a></li>
							<li><a href='collapsible'>JavaScript</a></li>
						</ul>
					</div>
				</nav>		
				<div className='row' style={styles.wrapper}>
					<div className='col m2 fixed' style={styles.navbar}>
						<div className='collection blue blue-text'>
							<a href='#!' className='collection-item blue-text'>Alvin</a>
							<a href='#!' className='collection-item active'>Alvin</a>
							<a href='#!' className='collection-item'>Alvin</a>
							<a href='#!' className='collection-item'>Alvin</a>
						</div>
					</div>
					<div className='col m10 offset-m2'>
						<div className='container'>{this.props.children}</div>
					</div>
				</div>
			</div>
		);
	}
}

	
import React, { Component } from 'react';
// import NavBar from './menu/NavBar';
import {Link} from 'react-router';
import { connect } from 'react-redux';

@connect(
	state => ({ user: state.user })
)
export default class App extends Component {
	render() {
		return (
			<div className='wrapper'>
							
				<nav className='blue'>
					<div className='nav-wrapper'>
						<a className='btn-floating btn-large waves-effect blue z-depth-0'><i className='tiny material-icons'>menu</i></a>	
						<a href='#' className='brand-logo'>Logo</a>

						<ul id='nav-mobile' className='right hide-on-med-and-down'>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/about'>About</Link></li>
							<li><a href='badges.html'>Components</a></li>
							<li><a href='collapsible.html'>JavaScript</a></li>
						</ul>
					</div>
				</nav>				
				<div className='container'>{this.props.children}</div>
			</div>
		);
	}
}

	
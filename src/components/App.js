import React, { Component } from 'react';
// import NavBar from './menu/NavBar';

export default class App extends Component {
	render() {
		return (
			<div className='wrapper'>
							
				<nav className='blue'>
					<div className='nav-wrapper'>
						<a className='btn-floating btn-large waves-effect blue z-depth-0'><i className='tiny material-icons'>menu</i></a>
						
						<a href='#' className='brand-logo'>Logo</a>
						<span>| Комментарии </span>

						<ul id='nav-mobile' className='right hide-on-med-and-down'>
							<li><a href='sass.html'>Sass</a></li>
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

	
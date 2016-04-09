import React, { Component } from 'react';
// import NavBar from './menu/NavBar';

export default class App extends Component {
	render() {
		return (
			<div className='wrapper'>
				
				<a className='btn-floating btn-large waves-effect waves-light red'><i className='material-icons'>add</i></a>
				<div className='container'>{this.props.children}</div>
			</div>
		);
	}
}

	
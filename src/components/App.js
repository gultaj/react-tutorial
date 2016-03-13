import React, { Component } from 'react';
import NavBar from './menu/NavBar';

export default class App extends Component {
	render() {
		localStorage.setItem('currentRoute', this.props.location.pathname);
		return (
			<div className="wrapper">
				<NavBar />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
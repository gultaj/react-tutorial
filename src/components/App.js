import React, { Component } from 'react';
import NavBar from './menu/NavBar';

export default class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<NavBar currentRoute={this.props.location.pathname} />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
import React, { Component } from 'react';
import Menu from './menu';

export default class App extends Component {
	render() {
		// console.log(this);
		return (
			<div className="wrapper">
				<Menu />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
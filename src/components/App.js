import React, { Component, PropTypes } from 'react';
import NavBar from './menu/NavBar';

export default class App extends Component {
	static propTypes = {
		location: PropTypes.shape({
			pathname: PropTypes.string
		}),
		children: PropTypes.element
	};

	render() {
		localStorage.setItem('currentRoute', this.props.location.pathname);
		return (
			<div className="wrapper">
				<NavBar />
				<div className="container">{this.props.children}</div>
			</div>
		);
	}
}

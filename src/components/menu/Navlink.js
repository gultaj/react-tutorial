import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavLink extends Component {
	get isActive() {
		return this.props.to == this.props.currentRoute;
	}

	render() {
		return (
			<li className={this.isActive ? 'active' : ''}>
				<Link to={this.props.to}>{this.props.title}</Link>
			</li>
		)
	}
}
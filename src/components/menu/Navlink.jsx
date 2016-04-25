import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavLink extends Component {
	static propTypes = {
		to: PropTypes.string,
		title: PropTypes.string
	};

	get isActive() {
		return false;//this.props.to === localStorage.getItem('currentRoute');
	}

	render() {
		return (
			<li className={this.isActive ? 'active' : ''}>
				<Link to={this.props.to}>{this.props.title}</Link>
			</li>
		);
	}
}

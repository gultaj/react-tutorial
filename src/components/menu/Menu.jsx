import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const links = [
	{title: 'Feed', href: '/', icon: 'home'},
	{title: 'Subscribes', href: '/subscribes', icon: 'share'},
	{title: 'Conversations', href: '/conversations', icon: 'message'},
	{title: 'My posts', href: '/posts', icon: 'person'}
];

const styles = {
	verticalAlign: 'middle',
	marginRight: 20
};

export default class Menu extends Component {
	isActive(href) {
		return this.props.currentRoute == href;
	}

	render() {
		return (
			<div className='collection'>
				{links.map((link, i) => (
					<Link to={link.href} key={i} className={(this.isActive(link.href) ? 'active ' : '') + 'collection-item'}>
						<i className='material-icons menu-icon' style={styles}>{link.icon}</i>
						<span className="title">{link.title}</span>
					</Link>
				))}
			</div>
		);
	}
}

import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/menu.css';

const links = [
	{title: 'Feed', href: '/', icon: 'home', params: {onlyActiveOnIndex: true}},
	{title: 'Subscribes', href: '/subscribes', icon: 'share'},
	{title: 'Conversations', href: '/conversations', icon: 'message'},
	{title: 'My posts', href: '/posts', icon: 'person'}
];

export default class Menu extends Component {
	static propTypes = {
		actions: React.PropTypes.shape({
			setTitle: React.PropTypes.func
		})
	};
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	componentWillMount() {
		const { setTitle } = this.props.actions;
		const { isActive } =this.context.router;
		links.map((link) => {
			if (isActive(link.href)) setTitle(link.title);
		});
	}

	render() {
		const { setTitle } = this.props.actions;
		return (
			<div className='menu collection'>
				{links.map((link, i) => (
					<Link to={link.href} key={i} 
						{...link.params}
						onClick={() => setTitle(link.title)} 
						activeClassName='active'
						className='collection-item'>
						<i className='material-icons menu-icon'>{link.icon}</i>
						<span className='title'>{link.title}</span>
					</Link>
				))}
			</div>
		);
	}
}

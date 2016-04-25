import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/menu.css';

const links = [
	{title: 'Feed', href: '/', icon: 'home'},
	{title: 'Subscribes', href: '/subscribes', icon: 'share'},
	{title: 'Conversations', href: '/conversations', icon: 'message'},
	{title: 'My posts', href: '/posts', icon: 'person'}
];

// const styles = {
// 	verticalAlign: 'middle',
// 	marginRight: 20
// };

export default class Menu extends Component {
	static propTypes = {
		actions: React.PropTypes.shape({
			setTitle: React.PropTypes.func
		}),
		currentRoute: React.PropTypes.string
	};

	componentWillMount() {
		const { currentRoute, actions } = this.props;
		links.map((link) => {
			if (currentRoute == link.href) actions.setTitle(link.title);
		});
	}

	render() {
		const { setTitle } = this.props.actions;
		const { currentRoute } = this.props;
		return (
			<div className='menu collection'>
				{links.map((link, i) => (
					<Link to={link.href} key={i} 
						onClick={() => setTitle(link.title)} 
						className={(currentRoute == link.href ? 'active ' : '') + 'collection-item'}>
						<i className='material-icons menu-icon'>{link.icon}</i>
						<span className='title'>{link.title}</span>
					</Link>
				))}
			</div>
		);
	}
}

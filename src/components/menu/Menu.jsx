import React, { Component } from 'react';
import { Link } from 'react-router';
import st from './styles/menu.css';
import { menu as links } from 'config/app';

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
		const { isActive } = this.context.router;
		links.map((link) => {
			if (isActive(link.href)) setTitle(link.title);
		});
	}

	render() {
		const { setTitle } = this.props.actions;
		return (
			<div className={st.menu + ' collection'}>
				{links.map((link, i) => (
					<Link to={link.href} key={i} 
						{...link.params}
						onClick={() => setTitle(link.title)} 
						activeClassName={st.active}
						className={st['collection-item'] + ' collection-item'}>
						<i className={'material-icons ' + st.icon}>{link.icon}</i>
						<span className='title'>{link.title}</span>
					</Link>
				))}
			</div>
		);
	}
}

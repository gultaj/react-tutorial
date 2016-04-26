import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/navbar.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appConfig } from 'config/app';
import * as authActions from 'actions/AuthAction';
import * as appActions from 'actions/AppAction';

@connect(
	state => ({ auth: state.auth, app: state.app }),
	dispatch => ({ 
		authActions: bindActionCreators(authActions, dispatch),
		appActions: bindActionCreators(appActions, dispatch)
	})
)
export default class Navbar extends Component {
	static propTypes = {
		authActions: React.PropTypes.shape({
			logout: React.PropTypes.func
		}),
		appActions: React.PropTypes.shape({
			setTitle: React.PropTypes.func
		}),
		app: React.PropTypes.object,
		auth: React.PropTypes.shape({
			token: React.PropTypes.string
		})
	};

	constructor() {
		super();
		this.state = {menuActive: false};
	}

	handleLogout() {
		const {token} = this.props.auth;
		var data = new FormData();
		data.append('token', token);
		this.props.authActions.logout(data);
	}
	dropdownMenu() {
		this.setState({menuActive: !this.state.menuActive});
	}

	render() {
		const { app, appActions } = this.props;
		return (
			<nav className='blue navbar'>
				<div className='nav-wrapper'>
					<a className='btn-floating btn-large waves-effect blue z-depth-0'><i className='menu-icon tiny material-icons'>menu</i></a>	
					<div className='brand-logo'>
						<Link to='/' className='brand-link' onClick={()=>appActions.setTitle('Feed')}>{appConfig.siteName}</Link>
						<span className='brand-title'>{app.title}</span>
					</div>

					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li><Link to='/about'>About</Link></li>
						<li className=''>
							<button onClick={::this.dropdownMenu} className='btn-floating grey lighten-1'><i className='material-icons navbar-icon'>person</i></button>
							<div className={(this.state.menuActive ? 'active ' : '') + 'dropdown-menu'} role='menu'>
								<div className='card profile z-depth-0'>
									<div className='arrow'></div>
									<div className='card-content black-text row'>
										<div className='col m2'>
											<i className='material-icons circle'>folder</i>
										</div>
										<div className='col m10'>
											<span className='title'>Title</span>
											<p>First Line Second Line</p>
										</div>
									</div>
									<div className='card-action profile-action'>
										<button type='button' onClick={::this.handleLogout} className='btn blue profile-btn--logout'>Logout</button>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

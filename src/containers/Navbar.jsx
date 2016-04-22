import React, { Component } from 'react';
// import NavLink from './NavLink';
// import Profile from './Profile';
import { Link } from 'react-router';
import './styles/navbar.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/AuthAction';

@connect(
	state => ({ auth: state.auth }),
	dispatch => ({ authActions: bindActionCreators(authActions, dispatch) })
)
export default class Navbar extends Component {
	handleLogout() {
		const {token} = this.props.auth;
		var data = new FormData();
		data.append('token', token)
		this.props.authActions.logout(data);
	}

	render() {
		return (
			<nav className='blue navbar'>
				<div className='nav-wrapper'>
					<a className='btn-floating btn-large waves-effect blue z-depth-0'><i className='menu-icon tiny material-icons'>menu</i></a>	
					<div className='brand-logo'>
						<Link to='/' className='brand-link'>Logo</Link>
						<span className='brand-title'>Conversations</span>
					</div>

					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/about'>About</Link></li>
						<li><a href='badges'>Components</a></li>
						<li><a onClick={::this.handleLogout}>Logout</a></li>
					</ul>
				</div>
			</nav>
		);
	}
}

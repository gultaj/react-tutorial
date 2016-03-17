import React, { Component } from 'react';
import NavLink from './NavLink';
import Profile from './Profile';
import { Link } from 'react-router';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
  				<div className="container">
  					<div className="navbar-header">
  						<Link to="/" className="navbar-brand">Brand</Link>
  					</div>
  					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  						<ul className="nav navbar-nav">
                <NavLink to="/" title="Home" />
                <NavLink to="/about" title="About" />
              </ul>
              <ul className="nav navbar-nav navbar-right">
  							<Profile />
  						</ul>
  					</div>
				</div>
			</nav>
		);
	}
}
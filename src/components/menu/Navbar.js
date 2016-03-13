import React, { Component } from 'react';
import NavLink from './NavLink';
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
                <NavLink currentRoute={this.props.currentRoute} to="/" title="Home" />
                <NavLink currentRoute={this.props.currentRoute} to="/about" title="About" />
              </ul>
              <ul className="nav navbar-nav navbar-right">
  							<NavLink currentRoute={this.props.currentRoute} to="/auth/login" title="Login" />
  						</ul>
  					</div>
				</div>
			</nav>
		);
	}
}
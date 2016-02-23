import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Menu extends Component {
	render() {
		return (
			<div className="row">
				<nav className="navbar navbar-default">
	  				<div className="container">
	  					<div className="navbar-header">
	  						<Link to="/" className="navbar-brand">Brand</Link>
	  					</div>
	  					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	  						<ul className="nav navbar-nav">
	  							<li><Link to="/">Home</Link></li>
	  							<li><Link to="/about">About</Link></li>
	  						</ul>
	  					</div>
					</div>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
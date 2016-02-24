import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Menu extends Component {
	constructor() {
		super();
		// this.state.contextTypes = {
  //       	router: React.PropTypes.func
  //   	};
	}

	render() {
		// let isActive = this.history.isActive(this.props.to, this.props.query);
		
		return (
			<nav className="navbar navbar-default">
  				<div className="container">
  					<div className="navbar-header">
  						<Link to="/" className="navbar-brand">Brand</Link>
  					</div>
  					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  						<ul className="nav navbar-nav">
  							<li><Link activeClassName="active" to="/">Home</Link></li>
  							<li><Link activeClassName="active" to="/about">About</Link></li>
  						</ul>
  					</div>
				</div>
			</nav>
		);
	}
}
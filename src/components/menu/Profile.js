import React, { Component } from 'react';
import NavLink from './NavLink';
import { Link } from 'react-router';
import AuthStore from 'stores/AuthStore';
import AuthAction from 'actions/AuthAction';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {currentUser: null};
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    AuthAction.logout();
    return false;
  }

	render() {
    return (
      !this.state.currentUser ? (
        <NavLink to="/auth/login" title="Login" />
      ) : (
        <span onClick={this.handleClick.bind(this)}>{this.state.currentUser.nickname} </span>
      )
    );
	}
  _onChange() {
    if (this.updater.isMounted(this)) {
      this.setState({currentUser: AuthStore.currentUser});
    }
  }
}
import React, { Component } from 'react';
// import NavLink from './NavLink';
// import AuthStore from 'stores/AuthStore';
// import AuthAction from 'actions/AuthAction';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {currentUser: null};
  }

  componentDidMount() {
    // AuthStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    // AuthStore.removeChangeListener(this._onChange.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    // AuthAction.logout();
    return false;
  }

	render() {
    return (
      !this.state.currentUser ? (
        // <NavLink to='/auth/login' title='Login' />
      ) : (
        <li className='dropdown'>
          <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
            {this.state.currentUser.nickname} <span className='caret'></span>
          </a>
          <ul className='dropdown-menu'>
            <li><a href='#'>Settings</a></li>
            <li role='separator' className='divider'></li>
            <li><a href='#' onClick={this.handleClick.bind(this)}>Logout</a></li>
          </ul>
        </li>
      )
    );
	}
  _onChange() {
    if (this.updater.isMounted(this)) {
      // this.setState({currentUser: AuthStore.currentUser});
    }
  }
}

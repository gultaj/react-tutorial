import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/AuthAction';

@connect(
	state => ({ auth: state.auth }),
	dispatch => ({ authActions: bindActionCreators(authActions, dispatch) })
)
class Auth extends Component {
	render() {
	console.log(this.context);
		// console.log('auth', this.props.authActions);
		const {auth, authActions} = this.props;
		const childrenWithProps = React.Children.map(this.props.children,
      		(child) => React.cloneElement(child, { auth: auth, actions: authActions })
      	);
		return <div>{childrenWithProps}</div>;
	}
}

export default Auth;
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/AuthAction';
import './styles/auth.css';

@connect(
	state => ({ auth: state.auth }),
	dispatch => ({ authActions: bindActionCreators(authActions, dispatch) })
)
class Auth extends Component {
	render() {
		const {auth, authActions} = this.props;
		const childrenWithProps = React.Children.map(this.props.children,
      		(child) => React.cloneElement(child, { auth: auth, actions: authActions })
      	);
		return (
			<div>
				<h2 className='brand-title-auth'>Logo+</h2> 
				<div className='auth-form'>{childrenWithProps}</div>;
			</div>
		)
	}
}

export default Auth;
import React, {Component} from 'react';
import {Link} from 'react-router';
// import AuthAction from 'actions/AuthAction';
// import AuthStore from 'stores/AuthStore';

const styles = {
	wrapper: {
		justifyContent: 'space-between',
		alignItems: 'baseline'
	},
	link: {
		fontSize: 20
	}
};



export default class Login extends Component {

	handleSubmit(e) {
		e.preventDefault();
		let email = e.target.elements.email.value;
		let password = e.target.elements.password.value;
		if (!email || !password) {
			return;
		}
		// AuthAction.login({email: email, password: password});
	}

	render() {
		return (
			<div className='modal-content form-signin'>
			{this.props.children}
				<div className='valign-wrapper' style={styles.wrapper}>
					<h3 className=''>Sign In</h3>
					<Link to='/auth/register' className='valign' style={styles.link}>Register</Link>
				</div>
				<div className='panel-body card-panel lighten-5 z-depth-1'>
					<form role='form' id='login-form' onSubmit={this.handleSubmit.bind(this)}>
						<div className='input-field'>
							<input className='' id='email' name='email' type='text' />
							<label htmlFor='email'>E-mail</label>
						</div>
						<div className='input-field'>
							<input className='' id='password' name='password' type='password' />
							<label htmlFor='password'>Password</label>
						</div>
						<p className='checkbox'>
							<input name='remember' type='checkbox' id='remember' /><label htmlFor='remember'>Remember Me</label>
						</p>
						<p className='center-align'><button type='sybmit' className='btn blue'>Login</button></p>
					</form>
				</div>
			</div>		
		);
	}

}

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import AuthError from './AuthError';
import {styles} from './styles/auth';

export default class Login extends Component {
	static propTypes = {
		user: PropTypes.object,
		fetching: PropTypes.bool,
		errorMessages: PropTypes.array
	};


	handleSubmit(e) {
		e.preventDefault();
		const userData = new FormData(this.refs.loginForm);
		this.props.actions.login(userData, '/');
		this.refs.loginPass.value = '';
	}

	render() {
		const {auth} = this.props;
		return (
			<div className='form-signin'>
				<div className='valign-wrapper' style={styles.wrapper}>
					<h3 className=''>Sign In</h3>
					<Link to='/auth/register' className='valign' style={styles.link}>Register</Link>
				</div>
				<AuthError messages={auth.errorMessages} />
				<div className='card-panel z-depth-1'>
					<form role='form' ref='loginForm' onSubmit={::this.handleSubmit}>
						<div className='input-field'>
							<input id='email' name='email' ref='loginEmail' type='text' required />
							<label htmlFor='email'>E-mail</label>
						</div>
						<div className='input-field'>
							<input id='password' name='password' ref='loginPass' type='password' required />
							<label htmlFor='password'>Password</label>
						</div>
						<p className='checkbox'>
							<input name='remember' type='checkbox' id='remember' />
							<label htmlFor='remember'>Remember Me</label>
						</p>
						<p className='center-align'><button type='submit' className='btn blue'>Login</button></p>
					</form>
				</div>
			</div>		
		);
	}

}

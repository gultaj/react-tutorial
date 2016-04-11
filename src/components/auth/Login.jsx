import React, {Component} from 'react';
import {Link} from 'react-router';
import {styles} from './styles/auth';

export default class Login extends Component {

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className='form-signin'>
				<div className='valign-wrapper' style={styles.wrapper}>
					<h3 className=''>Sign In</h3>
					<Link to='/auth/register' className='valign' style={styles.link}>Register</Link>
				</div>
				<div className='card-panel z-depth-1'>
					<form role='form' id='login-form' onSubmit={this.handleSubmit.bind(this)}>
						<div className='input-field'>
							<input id='email' name='email' type='text' />
							<label htmlFor='email'>E-mail</label>
						</div>
						<div className='input-field'>
							<input id='password' name='password' type='password' />
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

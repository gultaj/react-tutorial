import React, {Component} from 'react';
import {Link} from 'react-router';

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
	}

	render() {
		return (
			<div className='modal-content form-signin'>
				<div className='valign-wrapper' style={styles.wrapper}>
					<h3 className=''>Register</h3>
					<Link to='/auth/login' className='valign' style={styles.link}>Sign In</Link>
				</div>
				<div className='panel-body card-panel lighten-5 z-depth-1'>
					<form role='form' id='register-form' onSubmit={::this.handleSubmit}>
						<div className='input-field'>
							<input className='form-control' id='nickname' name='nickname' type='text' />
							<label htmlFor='nickname'>Nickname</label>
						</div>
						<div className='input-field'>
							<input className='form-control' id='email' name='email' type='email' />
							<label htmlFor='email'>E-mail</label>
						</div>
						<div className='input-field'>
							<input className='form-control' id='password' name='password' type='password' />
							<label htmlFor='password'>Password</label>
						</div>
						<div className='input-field'>
							<input className='form-control' id='confirm_password' name='confirm_password' type='password' />
							<label htmlFor='confirm_password'>Confirm password</label>
						</div>
						<p className='center-align'><button type='submit' className='btn blue'>Register</button></p>
					</form>
				</div>
			</div>		
		);
	}

}

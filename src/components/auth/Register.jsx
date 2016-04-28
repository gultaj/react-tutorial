import React, {Component} from 'react';
import {Link} from 'react-router';
import AuthError from './AuthError';
import st from './styles/auth.css'

export default class Login extends Component {
	static propTypes = {
		actions: React.PropTypes.shape({
			register: React.PropTypes.func
		}),
		auth: React.PropTypes.object
	};

	handleSubmit(e) {
		e.preventDefault();
		const userData = new FormData(this.refs.regForm);
		this.props.actions.register(userData);
		this.refs.regPass.value = this.refs.regPassConfirm.value = '';
	}

	render() {
		const {auth} = this.props;
		return (
			<div className={st.formSignin}>
				<div className={st.wrapper}>
					<h3 className=''>Register</h3>
					<Link to='/auth/login' className={st.link}>Sign In</Link>
				</div>
				<AuthError message={auth.errorMessage} />
				<div className='card-panel lighten-5 z-depth-1'>
					<form role='form' id='register-form' ref='regForm' onSubmit={::this.handleSubmit}>
						<div className='input-field'>
							<input id='nickname' name='nickname' type='text' />
							<label htmlFor='nickname'>Nickname</label>
						</div>
						<div className='input-field'>
							<input id='email' name='email' type='email' />
							<label htmlFor='email'>E-mail</label>
						</div>
						<div className='input-field'>
							<input id='password' ref='regPass' name='password' type='password' />
							<label htmlFor='password'>Password</label>
						</div>
						<div className='input-field'>
							<input id='password_confirmation' ref='regPassConfirm' name='password_confirmation' type='password' />
							<label htmlFor='password_confirmation'>Confirm password</label>
						</div>
						<p className='center-align'><button type='submit' className='btn green'>Register</button></p>
					</form>
				</div>
			</div>		
		);
	}
}

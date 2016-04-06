import React, {Component} from 'react';
import AuthAction from 'actions/AuthAction';
import AuthStore from 'stores/AuthStore';

export default class Login extends Component {

	componentDidMount() {
		AuthStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		AuthStore.removeChangeListener(this._onChange.bind(this));
	}

	handleSubmit(e) {
		e.preventDefault();
		let email = e.target.elements.email.value;
		let password = e.target.elements.password.value;
		if (!email || !password) {
			return;
		}
		AuthAction.login({email: email, password: password});
	}

	render() {
		return (
			<div className='modal-content form-signin'>
				<div className='panel-heading'>
					<h3 className='panel-title'>Sign In</h3>
				</div>
				<div className='panel-body'>
					<form role='form' id='login-form' onSubmit={this.handleSubmit.bind(this)}>
						<fieldset>
							<div className='form-group'>
								<input className='form-control' placeholder='E-mail' name='email' type='email'a />
							</div>
							<div className='form-group'>
								<input className='form-control' placeholder='Password' name='password' type='password' />
							</div>
							<div className='checkbox'>
								<label><input name='remember' type='checkbox' value='Remember Me' />Remember Me</label>
							</div>
							<button type='sybmit' className='btn btn-sm btn-success'>Login</button>
						</fieldset>
					</form>
				</div>
			</div>		
		);
	}

	_onChange() {
		if (this.updater.isMounted(this)) {
			// this.setState();
		}
	}
}

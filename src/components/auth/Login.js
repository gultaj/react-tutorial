import React, {Component} from 'react';
import AuthAction from 'actions/AuthAction';

export default class Login extends Component {

	handleSubmit(e) {
		e.preventDefault();
		var email = e.target.elements["email"].value;
		var password = e.target.elements["password"].value;
		if (!email || !password) return;
		AuthAction.login({email: email, password: password});
	}

	render() {
		return (
			<div className="modal-content form-signin">
	            <div className="panel-heading">
	                <h3 className="panel-title">Sign In</h3>
	            </div>
	            <div className="panel-body">
	                <form role="form" onSubmit={this.handleSubmit.bind(this)}>
	                    <fieldset>
	                        <div className="form-group">
	                            <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus="" />
	                        </div>
	                        <div className="form-group">
	                            <input className="form-control" placeholder="Password" name="password" type="password" value="" />
	                        </div>
	                        <div className="checkbox">
	                            <label><input name="remember" type="checkbox" value="Remember Me" />Remember Me</label>
	                        </div>
	                        <button type="sybmit" className="btn btn-sm btn-success">Login</button>
	                    </fieldset>
	                </form>
	            </div>
	        </div>		
		);
	}
}
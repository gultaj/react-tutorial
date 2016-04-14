import React, {Component, PropTypes} from 'react';

export default class AuthError extends Component {
	static propTypes = {
		message: PropTypes.string
	};

	render() {
		const { message } = this.props;
		if (message.length) {
			return (
				<div className='card-panel red lighten-2'>
					<span className='white-text'>{message}</span>
				</div>
			);
		}
		return null;
	}
}
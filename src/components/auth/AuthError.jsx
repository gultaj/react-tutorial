import React, {Component, PropTypes} from 'react';

export default class AuthError extends Component {
	static propTypes = {
		messages: PropTypes.array
	};

	render() {
		const { messages } = this.props;
		if (messages.length) {
			return (<div className='card-panel red lighten-2'>{messages.map((message, i) => (
				<span className='white-text' key={i}>{message}</span>)
			)}</div>);
		}
		return null;
	}
}
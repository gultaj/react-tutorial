import React, {Component, PropTypes} from 'react';

export default class Messages extends Component {
	static propTypes = {
		messages: PropTypes.array,
		currentUser: PropTypes.string
	};

	render() {
		var listMessages = '';
		const { messages } = this.props;
		if (messages) {
			listMessages = messages.map((message, i) => (
				<div className='card blue-grey darken-1' key={i}>
					<div className='card-content white-text'>
						<p>{message.message}</p>
					</div>
				</div>
			));
		}
		return (
			<div className='col m8'>
				<h3>{this.props.currentUser}</h3>
				{listMessages}
				<div>
					<form>
						<input type='text' name='text' />
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

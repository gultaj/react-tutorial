import React, {Component, PropTypes} from 'react';

export default class Message extends Component {
	static propTypes = {
		message: PropTypes.string
	};

	render() {
		return (
			<div className='card blue-grey darken-1'>
				<div className='card-content white-text'>
					<p>{this.props.message}</p>
				</div>
			</div>
		);
	}
}

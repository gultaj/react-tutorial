import React, {Component, PropTypes} from 'react';

const styles = {
	display: 'inline-block',
	width: '100%',
	verticalAlign: 'top',
	float: 'none'
};

export default class Comment extends Component {
	static propTypes = {
		text: PropTypes.string
	};

	render() {
		return (
			<div className='col m6' style={styles}>
				<div className='card'>
					<div className='card-content'>
						<span className='card-title activator grey-text text-darken-4'>Card Title</span>
						<p>{this.props.text}</p>
					</div>
					<div className='card-action'>
						<i className='material-icons circle'>perm_identity</i>
					</div>
				</div>
			</div>
		);
	}
}

import React, {Component, PropTypes} from 'react';

const styles = {
	paddingRight: 25
};

export default class Comment extends Component {
	static propTypes = {
		author: PropTypes.string,
		children: PropTypes.element
	};

	render() {
		return (
			<li className='collection-item avatar'>
				<i className='material-icons circle'>perm_identity</i>
				<span className='title'><strong>{this.props.author}</strong></span>
				<p style={styles}>{this.props.text}</p>
				<a href='#!' className='secondary-content'><i className='material-icons'>thumb_up</i></a>
			</li>
		);
	}
}

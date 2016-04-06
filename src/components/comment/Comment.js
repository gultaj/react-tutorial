import React, {Component, PropTypes} from 'react';

export default class Comment extends Component {
	static propTypes = {
		author: PropTypes.string,
		children: PropTypes.element
	};

	render() {
		return (
			<div className='comment media'>
				<div className='media-left'>
					<a href='#'><img className='media-object' /></a>
				</div>
				<div className='media-body'>
					<h4 className='commentAuthor media-heading'>{this.props.author}</h4>
					{this.props.children}
				</div>
			</div>
		);
	}
}

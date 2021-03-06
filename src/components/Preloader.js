import React, {Component, PropTypes} from 'react';

const styles = {
	wrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		zIndex: 999
	},
	back: {
		width: '100%',
		height: '100%',
		background: 'white',
		opacity: 0.5
	},
	circle: {
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		margin: 'auto',
		position: 'absolute'
	}
};

export default class Comment extends Component {
	static propTypes = {
		visible: PropTypes.bool
	};
	static defaultProps = {
		visible: false
	};

	render() {
		if (this.props.visible) {
			return (
				<div style={styles.wrapper}>
					<div style={styles.back}></div>
					<div className='preloader-wrapper active' style={styles.circle}>
						<div className='spinner-layer spinner-red-only'>
							<div className='circle-clipper left'>
								<div className='circle'></div>
							</div>
							<div className='gap-patch'>
								<div className='circle'></div>
							</div>
							<div className='circle-clipper right'>
								<div className='circle'></div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}
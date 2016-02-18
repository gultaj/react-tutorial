import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import CommentAction from 'actions/CommentAction';
import CommentStore from 'stores/CommentStore';

export default class CommentBox extends Component {
	constructor() {
		super();
		this.state = {data: []};
	}

	componentDidMount() {
	    CommentStore.addChangeListener(this._onChange.bind(this));
	    CommentAction.index();
	}

	componentWillUnmount() {
		CommentStore.removeChangeListener(this._onChange.bind(this));
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
    				<h1 className="panel-title">Комментарии</h1>
  				</div>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}

	_onChange() {
    	this.setState({data: CommentStore.comments});
  	}
}
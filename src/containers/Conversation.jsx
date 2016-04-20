import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as conversationActions from 'actions/ConversationAction';

@connect(
	state => ({ conversation: state.conversation }),
	dispatch => ({ conversationActions: bindActionCreators(conversationActions, dispatch) })
)
class Conversation extends Component {
	componentWillMount() {
	 	this.props.conversationActions.getConversations(this.props.params.user_id);    
	}
	handleClick(event) {
		event.preventDefault();
		const id = event.target.dataset.id;
		this.props.conversationActions.getMessages(+id);
	}

	render() {
		const {conversation, conversationActions} = this.props;
		// console.log(conversation);
		if (conversation.conversations.length) {
			return (
				<div className='row'>
					<div className='col m2'>
						<div className='collection'>
							{conversation.conversations.map((conv) => {
								return <a key={conv.id} data-id={conv.id} href='#' onClick={::this.handleClick} className='collection-item'>{conv.user.nickname}</a>;
							})}
						</div>
					</div>
					<div className='col m10'>
					{ conversation.messages.length ?
						conversation.messages.map((message, i) =>
							(<div key={i} className='card blue-grey darken-1'>
	            				<div className='card-content white-text'>
	              					<p>{message.message}</p>
	            				</div>
	          				</div>)
						) : ''}
					</div>
				</div>
			);
		}
		return <div></div>;
	}
}

export default Conversation;
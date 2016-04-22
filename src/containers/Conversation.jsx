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
	handleClick(e) {
		e.preventDefault();

		this.props.conversationActions.getMessages(+e.target.dataset.id);
	}

	render() {
		const {conversations, messages} = this.props.conversation;
		// console.log(conversation);
		if (conversations.length) {
			return (
				<div className='row'>
					<div className='col m4'>
						<div className='collection'>
							{conversations.map((conv) => {
								return <a key={conv.id} data-id={conv.id} href='#' onClick={::this.handleClick} className='collection-item'>{conv.user.nickname}</a>;
							})}
						</div>
					</div>
					<div className='col m8'>
					{ messages.length ?
						messages.map((message, i) => (
							<div key={i} className='card blue-grey darken-1'>
	            				<div className='card-content white-text'>
	              					<p>{message.message}</p>
	            				</div>
	          				</div>
      				) ) : ''}
					</div>
				</div>
			);
		}
		return <div></div>;
	}
}

export default Conversation;
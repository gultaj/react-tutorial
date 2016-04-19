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

	render() {
		const {conversation, conversationActions} = this.props;
		// console.log(conversation);
		if (conversation.conversations.length) {
			return <div>
				{conversation.conversations.map((conv, i) => <p key={i}>{conv.user.nickname}</p>)}
			</div>;
		}
		return null;
	}
}

export default Conversation;
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
		const {conversations, conversationActions} = this.props;
		console.log(conversations);
		return <div>
			{conversations.each(conv => <p>{conv.})}

		</div>;
	}
}

export default Conversation;
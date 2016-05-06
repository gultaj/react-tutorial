import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as conversationActions from 'actions/ConversationAction';
import * as appActions from 'actions/AppAction';
import st from './styles/conversations.css';
import Message from 'components/messages/Message';
import { browserHistory } from 'react-router';

@connect(
	state => ({ conversation: state.conversation }),
	dispatch => ({ 
		conversationActions: bindActionCreators(conversationActions, dispatch),
		appActions: bindActionCreators(appActions, dispatch)
	})
)
class Conversation extends Component {
	static propTypes = {
		conversationActions: React.PropTypes.shape({
			getConversations: React.PropTypes.func,
			getMessages: React.PropTypes.func,
			reset: React.PropTypes.func
		}),
		params: React.PropTypes.object,
		conversation: React.PropTypes.shape({
			conversations: React.PropTypes.array,
			messages: React.PropTypes.array
		})
	};

	constructor() {
		super();
		this.state = {}
	}

	componentWillMount() {
		const { ...actions } = this.props.conversationActions;
		const { user } = this.props.params;
		// var promise = new Promise(resolve => {
		// 	// actions.getConversations();
		// 	resolve(actions.getConversations()); 
			
		// });
		Promise.all([actions.getConversations()]).then(() => console.log(this.props.conversation.conversations))
		// promise.then(() => {
		// 	console.log(data);
		// 	return true;
		// })
		// if (!user) {
		// 	var conv = this.props.conversation.conversations[0];
		// 	browserHistory.push('/messages/' + conv.id);
		// }
		
		if (user) actions.getMessages(user);
	}

	componentWillUnmount() {
		this.props.conversationActions.reset();
	}

	componentDidUpdate(prevProps) {
		// if (!this.props.params.user) {
		// 	var conv = this.props.conversation.conversations[0];
		// 	browserHistory.push('/messages/' + conv.id);
		// }
		const { conversations, messages } = this.props.conversation;
		if (conversations.length && !messages.length) {
			const conv = conversations[0];
			browserHistory.resolve('/messages/' + conv.id);
		}
		if (prevProps.params.user !== this.props.params.user) {
			this.props.conversationActions.getMessages(this.props.params.user);
		}
	}

	render() {
		const {conversations, messages} = this.props.conversation;
		if (conversations.length) {
			return (
				<div className='row'>
					<div className='col m4'>
						<div className='collection'>
							{conversations.map((conv) => {
								return <Link key={conv.id} data-id={conv.id} to={'/messages/' + conv.id}
									className={'collection-item ' + st.item}
									activeClassName='active'>
									<img src={conv.user.avatar} className={st.avatar} width='40' height='40'/>
									{conv.user.full_name}</Link>;
							})}
							<a href='#' data-id='-1' className={'collection-item ' + st.item}>New message</a>
						</div>
					</div>
					<div className='col m8'>
					<h3></h3>
					{ messages.length ? messages.map((message, i) => <Message key={i} message={message.message} />) : ''}
					</div>
				</div>
			);
		}
		return <div></div>;
	}
}

export default Conversation;
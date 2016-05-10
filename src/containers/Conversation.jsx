import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as conversationActions from 'actions/ConversationAction';
import * as appActions from 'actions/AppAction';
import st from './styles/conversations.css';
import Message from 'components/messages/Message';
// import _ from 'lodash';

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
		this.state = {current_user: ''};
	}

	componentWillMount() {
		this.props.conversationActions.getConversations()
			.then(() => this.setCurrentUser(this.props.params.user));
	}

	componentWillUnmount() {
		this.props.conversationActions.reset();
	}

	setCurrentUser(id = null) {
		const {conversations} = this.props.conversation;
		id = id || conversations[0].id;
		const conv = conversations.find(o => o.id == id);
		if (conv) {
			this.setState({current_user: conv.user.full_name});
			this.props.conversationActions.getMessages(id);
		}
	}

	componentWillReceiveProps(nextProps) {
		const user = nextProps.params.user;
		if (user !== this.props.params.user) {
			this.setCurrentUser(user);
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
							<Link to='/messages/new' className={'collection-item ' + st.item}>New message</Link>
						</div>
					</div>
					<div className='col m8'>
					<h3>{this.state.current_user}</h3>
					{ messages.length ? messages.map((message, i) => <Message key={i} message={message.message} />) : ''}
					</div>
				</div>
			);
		}
		return <div></div>;
	}
}

export default Conversation;
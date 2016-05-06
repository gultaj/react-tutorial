import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as conversationActions from 'actions/ConversationAction';
import * as appActions from 'actions/AppAction';
import st from './styles/conversations.css';

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

	componentDidMount() {
		const { ...actions } = this.props.conversationActions;
		const { user } = this.props.params;
		actions.getConversations();  
		if (user) actions.getMessages(user);
	}

	componentWillUnmount() {
		this.props.conversationActions.reset();
	}

	componentDidUpdate(prevProps) {
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
								return <Link key={conv.id} data-id={conv.id} to={'/messages/' + conv.user.id}
									className={'collection-item ' + st.item}
									activeClassName='active'>
									<img src={conv.user.avatar} className={st.avatar} width='40' height='40'/>
									{conv.user.full_name}</Link>;
							})}
							<a href='#' data-id='-1' className={'collection-item ' + st.item}>New message</a>
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
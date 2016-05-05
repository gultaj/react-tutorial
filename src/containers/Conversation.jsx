import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
			getMessages: React.PropTypes.func
		}),
		conversation: React.PropTypes.shape({
			conversations: React.PropTypes.array,
			messages: React.PropTypes.array
		})
	};

	constructor() {
		super();
		this.state = {current: 0};
	}

	componentDidMount() {
		this.props.conversationActions.getConversations();  

	}
	handleClick(e) {
		e.preventDefault();
		this.setState({current: +e.target.dataset.id});
		this.props.conversationActions.getMessages(+e.target.dataset.id);
	}

	render() {
		const {conversations, messages} = this.props.conversation;
		if (conversations.length) {
			return (
				<div className='row'>
					<div className='col m4'>
						<div className='collection'>
							{conversations.map((conv) => {
								return <a key={conv.id} data-id={conv.id} href='#' 
									onClick={::this.handleClick} 
									className={(this.state.current == conv.id ? 'active ': '') + 'collection-item ' + st.item}>
									<img src={conv.user.avatar} className={st.avatar} width='40' height='40'/>
									{conv.user.nickname}</a>;
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
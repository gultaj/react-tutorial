import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as conversationActions from 'actions/ConversationAction';
// import * as appActions from 'actions/AppAction';
import st from './styles/conversations.css';
// import Messages from 'components/messages/Messages';
// import _ from 'lodash';

@connect(
	state => ({ conversation: state.conversation }),
	dispatch => ({ actions: bindActionCreators(conversationActions, dispatch) })
)
class Conversation extends Component {
	static propTypes = {
		actions: React.PropTypes.shape({
			getConversations: React.PropTypes.func,
			getMessages: React.PropTypes.func,
			reset: React.PropTypes.func
		}),
		params: React.PropTypes.object,
		conversation: React.PropTypes.shape({
			conversations: React.PropTypes.array,
			messages: React.PropTypes.array
		}),
		children: React.PropTypes.node
	};

	constructor() {
		super();
		this.state = {currentUser: ''};
	}

	componentWillMount() {
		this.props.actions.getConversations()
			.then(() => this.setCurrentUser(this.props.params.user));
	}

	componentWillUnmount() {
		this.props.actions.reset();
	}

	setCurrentUser(id = null) {
		const {conversations} = this.props.conversation;
		id = id || conversations[0].id;
		const conv = conversations.find(o => o.id == id);
		if (conv) {
			this.setState({currentUser: conv.user.full_name});
			this.props.actions.getMessages(id);
		}
	}

	componentWillReceiveProps(nextProps) {
		const user = nextProps.params.user;
		if (user !== this.props.params.user) {
			this.setCurrentUser(user);
		}
	}

	childrenWithProps() {
		if (!this.props.params.user) {
			return this.props.children;
		}
		const {messages} = this.props.conversation;
		const {currentUser} = this.state;
		return React.Children.map(this.props.children,
			(child) => React.cloneElement(child, { messages, currentUser })
		);
	}

	render() {
		const {conversations} = this.props.conversation;
		const children = this.childrenWithProps();
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
							<Link to='/messages/new' 
								className={'collection-item ' + st.item}
								activeClassName='active'>New message</Link>
						</div>
					</div>
					{children}
				</div>
			);
		}
		return <div></div>;
	}
}

export default Conversation;
import React from 'react';
import {
	connect
} from 'react-redux';
import {
	user
} from '../../redux/user.redux'
import {
	WingBlank,
	List,
	InputItem
}
from 'antd-mobile';
import {
	getChatList,
	setChatRec
} from '../../redux/chatList.redux';
import io from 'socket.io-client';
const socket = io('ws://localhost:9093')
@connect(
	state => {
		return {
			user: state.user,
			chat: state.chat
		}
	}, {
		getChatList,
		setChatRec
	}
)

export default class Chart extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			val: '',
			list: []
		}
	}
	componentDidMount() {
		this.props.getChatList();
		socket.on('recMsg', (data) => {
			//console.log(data, "recMsg")
			this.props.setChatRec(data)
		})

	}
	changeVal(val) {
		this.setState({
			val
		})
	}
	emitVal() {
		if (!this.state.val) return;
		socket.emit('sendMsg', {
			msg: this.state.val,
			from: this.props.user._id,
			to: this.props.match.params.id,
		})
		this.setState({
			val: ''
		})
	}
	render() {
		const Item = List.Item;
		const Brief = Item.Brief;
		const list = this.props.chat.list
		const users = this.props.chat.users

		const inner = list.map((v, index) => {
			let imgPos = v.from === this.props.user._id;
			return !imgPos ?
				(<Item key={index} thumb={users[v.from] && users[v.from].avatar} multipleLine>
						          {v.content}
						        </Item>) :
				(<Item key={index} extra={<img src={users[v.from] && users[v.from].avatar}/>} multipleLine>
						          {v.content}
						        </Item>)

		})
		return (
			<div>
				<WingBlank>

					<List>
						{ inner }
					</List>
				</WingBlank>
				
				<List className="stick-footer">
					<InputItem placeholder="请输入" value={this.state.val} onChange={(v) => { this.changeVal(v) } } onExtraClick={() => this.emitVal()} extra="发送"></InputItem>
				</List>
			</div>
		);
	}
}
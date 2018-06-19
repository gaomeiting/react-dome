import React from 'react';
import {
	Result,
	List,
	WingBlank,
	WhiteSpace
} from 'antd-mobile'
import {
	connect
} from 'react-redux';
import {
	setUserInfo
} from '../../redux/user.redux'
import cookies from 'browser-cookies'

@connect(
	state => {
		return {
			user: state.user
		}
	}, {
		setUserInfo
	})
export default class Me extends React.Component {
	componentDidMount() {
		console.log("componentDidMount")
	}
	quit() {
		//console.log(cookies.get("userId"))
		cookies.erase("userId")
		this.props.setUserInfo({
			name: '',
			pwd: '',
			pwdRepeat: '',
			type: 0,
			errMsg: '',
			avatar: null
		})
		this.props.history.push("/login")
	}

	render() {
		const user = this.props.user
		const Item = List.Item
		return (
			<div>
		
				{ !user.avatar ? null :
					<WingBlank>
						<WhiteSpace />
						<Result
							img = {
								<img src= {user.avatar.icon} className="spe" style={{ fill: '#F13642' }} />
							}
						    title={user.name}
						    message={user.desc}
						  />
						<WhiteSpace />

						<List renderHeader={() => '设置'}>
							<Item onClick={() => this.quit() } >注销</Item>
					    </List>
					</WingBlank>
					
				}
			</div>

		);
	}
}
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List, InputItem, WhiteSpace, WingBlank, Button} from 'antd-mobile'
import logo from '../logo.svg'
import './login.css'
import { setUserInfo, login } from '../../redux/user.redux'

@connect( state => {
	return { user: state.user }
},{setUserInfo, login})

export default class Login extends Component {
	goRegister() {
		this.props.history.push('/register')
	}
	render() {
		const user = this.props.user
		return (
			<div>
				<WingBlank>
				<div className="img">
					<img src={logo}/>
				</div>
				<List>
					{user.errMsg ? <InputItem editable = {false} value={user.errMsg}></InputItem> : null}
					<InputItem placeholder='请输入用户名' onChange={(v) => this.props.setUserInfo({'name': v})}>用户名</InputItem>
					<InputItem type='password' placeholder='请输入密码' onChange={ v => this.props.setUserInfo({'pwd': v})}>密码</InputItem>
						
				</List>
				<WhiteSpace />
				<WhiteSpace />
				<Button type='primary' onClick={() => this.props.login(user.name, user.pwd) }>登录</Button>
				<WhiteSpace />
				<Button type='primary' onClick={() => this.goRegister() }>注册</Button>
				</WingBlank>
			</div>
		);
	}
}


import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button} from 'antd-mobile'
import logo from '../logo.svg'
import './login.css'
export default class login extends Component {
	state = {}
	onChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	goRegister() {
		this.props.history.push('/register')
	}
	login() {
		console.log(this.state)
	}
	render() {
		return (
			<div>
				<WingBlank>
				<div className="img">
					<img src={logo}/>
				</div>
				<List>
					<InputItem placeholder='请输入用户名' onChange={ v => this.onChange('name', v)}>用户名</InputItem>
					<InputItem placeholder='请输入密码' onChange={ v => this.onChange('password', v)}>密码</InputItem>
				</List>
				<WhiteSpace />
				<WhiteSpace />
				<Button type='primary' onClick={() => {this.login()}}>登录</Button>
				<WhiteSpace />
				<Button type='primary' onClick={() => { this.goRegister() }}>注册</Button>
				</WingBlank>
			</div>
		);
	}
}


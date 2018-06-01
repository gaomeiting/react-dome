import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio } from 'antd-mobile'
import logo from '../logo.svg'
import { register, setUserInfo } from '../../redux/user.redux'

@connect(state => {
	return { user: state.user}
}, { register, setUserInfo })

export default class Register extends Component {
	
	
	render() {
		const data = [
			{ value: 0, label: '牛人'},
			{ value: 1, label: 'boss'}
		]
		const RadioItem = Radio.RadioItem;
		const user = this.props.user
		return (
			<div>
				<WingBlank>
					<div className="img">
						<img src={logo}/>
					</div>
					<List>
						{user.errMsg ? <InputItem editable = {false} value={user.errMsg}></InputItem> : null}
						<InputItem placeholder="请输入用户名" onChange={(v) => this.props.setUserInfo({'name': v})}>用户名</InputItem>
						<InputItem type='password' placeholder="请输入密码" onChange={(v) => this.props.setUserInfo({'pwd': v})}>密码</InputItem>
						<InputItem type='password' placeholder="请确认密码" onChange={(v) => this.props.setUserInfo({'pwdRepeat': v})}>确认密码</InputItem>
						{data.map(i => (
				          <RadioItem key={i.value} checked={user.type === i.value} onChange={(v) => this.props.setUserInfo({'type': v.value})}>
				            {i.label}
				          </RadioItem>
				        ))}
					</List>
					<WhiteSpace />
					<Button type="primary" onClick={ () => this.props.register(user.name, user.pwd, user.pwdRepeat, user.type)}>注册</Button>
				</WingBlank>
			</div>
		);
	}
}

import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { logIn } from './auth.redux'
@connect(state => {
	return { auth:state.auth }
}, {
	logIn
})
export default class Auth extends Component {
	render() {
		return (
			<div>
				{ this.props.auth.isAuth? <Redirect to='/dashboard'></Redirect> : null }
				<p>您还没有登录，请先登录</p>
				<Button type="primary" onClick={() => this.props.logIn()}>登录</Button>
			</div>
		);
	}
}

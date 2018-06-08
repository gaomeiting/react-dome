import React from 'react';
import { connect } from 'react-redux';
import {List, InputItem, TextareaItem, WhiteSpace, WingBlank, Button, NavBar, Toast } from 'antd-mobile'
import AvatarList from '../../components/avatar-list/avatar-list'
import { updata } from '../../redux/user.redux'
@connect(state => {
	return {user: state.user}
}, {updata})
export default class BossInfo  extends React.Component {
	/*static propTypes = {
		name: React.PropTypes.string,
	};*/

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			job: '',
			desc: '',
			salary: 0,
			err: '',
			avatar: null,
			currentAvatarIndex: 0
		}
	}
	changeForm(key, val) {
		this.setState({
			[key] : val
		})
		

	}
	submitForm() {

		//校验规则
		const {name, job, desc, salary} = this.state;
		if(!name || !job || !desc || !salary) {
			this.setState({
				err: '公司名称,工作名称,岗位要求,薪水不能为空或0'
			})
		}
		else {
			
			const {_id} = this.props.user;

			const {avatar, name, job, desc, salary} = this.state;
			console.log({_id, avatar, name, job, desc, salary})

			this.props.updata({_id, avatar, name, job, desc, salary})
		}
		if(this.state.err) {
			Toast.info(this.state.err)
		}
	}
	selectAvatar(el, index) {

		this.setState({
			avatar: el,
			currentAvatarIndex: index
		})
	}
	
	render() {
		return (
			<div>
				<NavBar mode="dark">牛人信息完善</NavBar>
				<WhiteSpace />
				<WhiteSpace />
				<WingBlank>
					{this.state.err ? Toast.info(this.state.err) : null}
					<AvatarList avatar={this.state.avatar} selectAvatar={ (el, index) => this.selectAvatar(el, index) } ></AvatarList>
					<InputItem type="text" placeholder="请输入求职岗位" onChange={(v) => this.changeForm('job' , v)} clear  >求职岗位</InputItem>
					<InputItem type="text" placeholder="请输入公司名称" onChange={(v) => this.changeForm('name' , v)} clear >公司名称</InputItem>
					<InputItem type="money" moneyKeyboardAlign="left" placeholder="请输入期望薪资" onChange={(v) => this.changeForm('salary' , v)} clear >期望薪资</InputItem>
					<TextareaItem type="text" placeholder="请输入个人简介" title="个人简介" rows="4" count="150" onChange={(v) => this.changeForm('desc' , v)} ></TextareaItem>
					<WhiteSpace />
					<Button type="primary" onClick={() => this.submitForm()} >保存</Button>
				</WingBlank>
			</div>
		);
	}
}



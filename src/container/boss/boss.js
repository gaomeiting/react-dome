import React from 'react';
import {
	connect
} from 'react-redux';
import {
	getUserList
} from '../../redux/userList.redux';
import {
	Card,
	WingBlank,
	WhiteSpace
} from 'antd-mobile'

@connect(state => {
	return {
		boss: state.userList.list
	}
}, {
	getUserList
})

export default class Boss extends React.Component {
	componentDidMount() {
		this.props.getUserList({
			type: 1
		})
	}
	render() {
		const list = this.props.boss;
		const listItems = list.map((item) => {
			return <WingBlank key={item._id} size="lg">
				    <WhiteSpace size="lg" />
				    <Card>
				      <Card.Header
				        title={item.name}
				        thumb={item.avatar.icon}
				        extra={<span>{item.job}</span>}
				      />
				      <Card.Body>
				        <div>{item.desc}</div>
				      </Card.Body>
				    </Card>
				    <WhiteSpace size="lg" />
				  </WingBlank>
		});
		return (
			<div>{listItems}</div>
		);
	}
}
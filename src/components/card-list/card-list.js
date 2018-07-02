import React from 'react';
import {
	withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types'
import {
	connect
} from 'react-redux';
import {
	Card,
	WingBlank,
	WhiteSpace
} from 'antd-mobile'

@withRouter
export default class CardList extends React.Component {
	static propTypes = {
		list: PropTypes.array
	};

	constructor(props) {
		super(props);
	}
	switchPage(item) {
		this.props.history.push(`/chat/${item._id}`)
		//console.log(item)
	}
	render() {
		const listItems = this.props.list.map((item) => {
			return <WingBlank key={item._id} size="lg">
				    <WhiteSpace size="lg" />
				    <Card onClick={() => { this.switchPage(item) }}>
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
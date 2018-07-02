import React from 'react';
import {
	connect
} from 'react-redux';
import {
	getUserList
} from '../../redux/userList.redux';

import CardList from '../../components/card-list/card-list'
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
			type: 0
		})
	}
	render() {
		const list = this.props.boss;
		return (

			{
				list
			} ? <CardList list={ list } ></CardList> : null
		);
	}
}
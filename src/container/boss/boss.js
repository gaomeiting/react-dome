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
			type: 1
		})
		/*socket.on('news', function(data) {
			console.log(data);
			socket.emit('my other event', {
				my: 'data'
			});
		});*/
	}
	render() {

		const list = this.props.boss;
		//console.log(list, "")
		return (

			{
				list
			} ? <CardList list={ list } ></CardList> : null
		);
	}
}
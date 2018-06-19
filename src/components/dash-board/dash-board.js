import React from 'react';
import {
	connect
} from 'react-redux';
import {
	NavBar,
	TabBar
} from 'antd-mobile'
import {
	Switch,
	Route
} from 'react-router-dom'
import Boss from '../../container/boss/boss'
import Genius from '../../container/genius/genius'
import Msg from '../../container/msg/msg'
import Me from '../../container/me/me'

@connect(state => {
	return {
		user: state.user
	}
})

export default class DashBoard extends React.Component {
	/*static propTypes = {
		name: React.PropTypes.string,
	};*/

	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0
		}
	}
	changeTab(index, v) {
		this.setState({
			currentIndex: index
		})
		this.props.history.push(v.path);
	}
	render() {
		const TabBarItem = TabBar.Item
		const navData = [{
			path: '/boss',
			component: Boss,
			icon: require('./boss.png'),
			iconSel: require('./boss-active.png'),
			title: 'boss',
			flag: this.props.user.type === 1
		}, {
			path: '/genius',
			component: Genius,
			icon: require('./job.png'),
			iconSel: require('./job-active.png'),
			title: '牛人',
			flag: this.props.user.type === 0
		}, {
			path: '/msg',
			component: Msg,
			icon: require('./msg.png'),
			iconSel: require('./msg-active.png'),
			title: '消息'
		}, {
			path: '/me',
			component: Me,
			icon: require('./user.png'),
			iconSel: require('./user-active.png'),
			title: '我的'
		}]
		const navList = navData.filter((v) => {
			return !v.flag
		})
		return (
			<div>
				<NavBar className="fixd-header" mode="dark">{ this.props.user.type ? '牛人列表' : 'boss列表'}</NavBar>
				
				<TabBar>
					{ navList.map((v, index) => {
						return <TabBarItem
					            icon={

					              <div style={{
					                width: '22px',
					                height: '22px',
					                backgroundImage : `url(${v.icon}`,
					                backgroundSize : '100% 100%'
					                }}
					              />
					            }
					            selectedIcon={
					              <div style={{
					                width: '22px',
					                height: '22px',
					                backgroundImage : `url(${v.iconSel}`,
					                backgroundSize : '100% 100%'
					                }}
					              />
					            }
					            selected = { index === this.state.currentIndex }
					            onPress = {() => this.changeTab(index, v)}
					            title={v.title}
					            key={v.title}
					            
					          >
					        </TabBarItem>

					}) }
				</TabBar>
				<div style={{marginTop: '45px'}}>
					<Switch>
						{navData.map(v => {
							return <Route  path={v.path} component={v.component} key={v.path} ></Route>
						})}
					</Switch>
				</div>
			</div>
		);
	}
}
import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile';
import App from './App'
import { logOut } from './auth.redux'


function erying() {
	return <h1>我是二营</h1>
}
function qibinglian() {
	return <h1>我是骑兵连</h1>
}


@connect(state => {
	return {auth: state.auth}
},{ logOut })
export default class Dashboard extends Component {
	render() {
		const app =(
				<div>
					<p>独立团</p>
					{this.props.auth.isAuth ? <Button type="primary" onClick={ () => this.props.logOut()}> 注销 </Button> : null}
					<ul>
						<li>
							<Link to="/dashboard">一营</Link>
						</li>
						<li>
							<Link to="/dashboard/erying">二营</Link>
						</li>
						<li>
							<Link to="/dashboard/qibinglian">骑兵连</Link>
						</li>
					</ul>
					<Switch>
						<Route path="/dashboard"  exact component={App}></Route>
						<Route path="/dashboard/erying" component={erying}></Route>
						<Route path="/dashboard/qibinglian" component={qibinglian}></Route>
					</Switch>
				</div>
			)
		return (
			!this.props.auth.isAuth ? <Redirect to='/'></Redirect> : app
		)
	}
}

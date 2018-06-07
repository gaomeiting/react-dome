import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import axios from 'axios'

@withRouter
export default class AuthRoute extends React.Component {
	
	componentDidMount() {
		axios.get('/user/info').then(res => {
			if(res.data.code === 0) {
				if(!res.data.user.type) {
					this.props.history.push('/genius')
				}
				else {
					this.props.history.push('/boss')
				}
			}
			else {
				//跳转到登录页
				this.props.history.push('/login')
				console.log(this.props.location.pathname)
			}
		})
	}
	render() {
		return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
			null
		);
	}
}



import axios from 'axios'
const USER_INFO = 'USER_INFO'
const ERR_MSG = 'ERR_MSG'
const initState = {
		name: '',
		pwd: '',
		pwdRepeat: '',
		type: 0,
		errMsg: ''
	}

export function user(state = initState, action) {
	switch (action.type) {
		case USER_INFO:
			return { ...state, ...action.preload }
		case ERR_MSG: 
			return { ...state, ...action.errMsg }
		default:
			return state
	}
}
export function setUserInfo(preload) {
	return { type: USER_INFO, preload }
}
export function setErrMsg(errMsg) {
	return { type: ERR_MSG, errMsg }
}
export function register(name, pwd, pwdRepeat, type) {
	return dispatch => {
		if(!name || !pwd ) {
			dispatch(setErrMsg({ errMsg: '用户名密码不能为空' }))
			return;
		}
		if(pwd !== pwdRepeat) {
			dispatch(setErrMsg({ errMsg: '两次输入的密码不一致' }))
			return;
		}
		axios.post('/user/register', {
			name,
			pwd,
			type
		}).then(res => {
			const data = res.data;
			if(data.code === 0 ) {
				dispatch(setUserInfo(data.user))

					//goNextInfo.call( this, data.user.type )
			}
			else {
				dispatch(setErrMsg({ errMsg: data.msg}))
			}
		})
	}
	
}
export function updata(obj) { 
	const company= obj.name
	const {_id, job, salary, desc, avatar} = obj;
	return dispatch => {
		axios.post('/user/updata', {
			_id, company, job, salary, desc, avatar
		}).then(res => {
			const data = res.data;
			if(data.code === 0 ) {
				dispatch(setUserInfo({job, salary, desc, avatar }))
				goNext.call( this, data.user.type )
			}
			else {
				dispatch(setErrMsg({ errMsg: data.msg}))
			}
		})
	}
	
}
export function login(name, pwd) {
	
	return dispatch => {
		if(!name || !pwd ) {
			dispatch(setErrMsg({ errMsg: '用户名密码不能为空' }))
			return;
		}
		
		axios.post('/user/login', {
			name,
			pwd
		}).then(res => {
			const data = res.data;
			if(data.code === 0 ) {
				dispatch(setUserInfo(data.user))
				goNext.call( this, data.user.type )
			}
			else {
				dispatch(setErrMsg({ errMsg: data.msg}))
			}
		})
	}
	
}
function goNext(type) {
	switch(type) {
		case 0:
			this.history.push('/genius')
		break;
		case 1:
			this.history.push('/boss')
	}
}
function goNextInfo(type) {
	switch(type) {
		case 0:
			this.history.push('/geniusInfo')
		break;
		case 1:
			this.history.push('/bossInfo')
	}
}


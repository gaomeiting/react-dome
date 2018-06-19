import axios from 'axios'
const USER_LIST = 'USER_LIST'
const initState = {
	list: []
}
export function userList(state = initState, action) {
	
	switch(action.type) {
		case USER_LIST: 
			return { ...state, list: action.list };
		default:
			return state;
	}
}
export function setUserList (list) {
		return { type: USER_LIST, list }
}
export function getUserList ({type}) {
	return dispatch => {
		axios.get('/user/list', {
			params: {type}
		}).then(res => {
			if(res.data.code === 0) {
				dispatch(setUserList(res.data.data))
			}
		})
	}
}
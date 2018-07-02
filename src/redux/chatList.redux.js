import axios from '../config'
const SET_CHAT_LIST = 'SET_CHAT_LIST';
const SET_CHAT_USERS = 'SET_CHAT_USERS';
const SET_CHAT_REC = 'SET_CHAT_REC';
const initState = {
	list: [],
	users: []
}
export function chat(state = initState, action) {
	switch (action.type) {
		case SET_CHAT_LIST:
			return { ...state,
				list: action.list
			}
		case SET_CHAT_USERS:
			return { ...state,
				users: action.list
			}
		case SET_CHAT_REC:
			return {
				...state,
				list: [...state.list, action.item]
			}
		default:
			return state
	}

}
export function setChatList(list) {
	return {
		type: SET_CHAT_LIST,
		list
	}
}
export function setChatUsers(list) {
	return {
		type: SET_CHAT_USERS,
		list
	}
}
export function setChatRec(item) {
	return {
		type: SET_CHAT_REC,
		item
	}
}
export function getChatList() {
	return (dispatch) => {
		axios.get('/user/getmsglist').then(res => {
			if (res.data.code === 0) {
				//console.log(res.data.users)
				dispatch(setChatList(res.data.msgs))
				dispatch(setChatUsers(res.data.users))
			}
		}).catch(err => {
			console.log(err)
		})
		//dispath(setChatList(list))
	}
}
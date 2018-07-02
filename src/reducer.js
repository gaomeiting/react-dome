import {
	combineReducers
} from 'redux'
import {
	user
} from './redux/user.redux'
import {
	chat
} from './redux/chatList.redux'
import {
	userList
} from './redux/userList.redux'


export default combineReducers({
	user,
	userList,
	chat
})
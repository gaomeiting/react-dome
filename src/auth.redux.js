import axios from './config'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER = 'USER'
const initState = {
	isAuth: false,
	name:'张三',
	age:18
}
export const auth = (state = initState, action) => {
	switch(action.type) {
		case LOGIN :
			return { ...state, isAuth: true };
		case LOGOUT :
			return { ...state, isAuth: false };
		case USER: 
			return { ...state, ...action.preload }
		default:
		return state;
	}
}
export function logIn (){
	return { type: LOGIN}
}
export function logOut (){
	return { type: LOGOUT}
}
export function user(data) {
	return { type: USER, preload: data}
}
export function getUserData() {
	return depatch => {
		axios('/data').then(res => {
			depatch(user(res.data[0]))
		})
	}
}
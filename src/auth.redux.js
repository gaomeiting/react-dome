const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export const auth = (state = {isAuth: false, username:'张三'}, action) => {
	switch(action.type) {
		case LOGIN :
			return { ...state, isAuth: true };
		case LOGOUT :
			return { ...state, isAuth: false };
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
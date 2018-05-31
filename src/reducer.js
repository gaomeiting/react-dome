import { combineReducers } from 'redux'

import { auth } from './auth.redux'
import { counter } from './index.redux'

export default combineReducers({
	auth,
	counter
})


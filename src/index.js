import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter,
		 Route
} from 'react-router-dom'
import thunk from 'redux-thunk'
import reducer from './reducer'
import Login from './container/login/login'
import BossInfo from './container/boss-info/boss-info'
import Boss from './container/boss/boss'
import GeniusInfo from './container/genius-info/genius-info'
import Genius from './container/genius/genius'
import Register from './container/register/register'
import AuthRoute from './components/auth-route/auth-route'
import './config'
let store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))


ReactDOM.render(
	(<Provider store = {store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Route path='/boss' component={Boss}></Route>
				<Route path='/bossInfo' component={BossInfo}></Route>
				<Route path='/geniusInfo' component={GeniusInfo}></Route>
				<Route path='/genius' component={Genius}></Route>
				<Route path="/login" exact component={Login}></Route>
				<Route path="/register" component={Register}></Route>
				
			</div>
		</BrowserRouter>
	</Provider>),
	 document.getElementById('root')
);	



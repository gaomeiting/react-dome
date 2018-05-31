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
import Register from './container/register/register'

let store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))


ReactDOM.render(
	(<Provider store = {store}>
		<BrowserRouter>
			<div>
				<Route path="/login" exact component={Login}></Route>
				<Route path="/register" component={Register}></Route>
				
			</div>
		</BrowserRouter>
	</Provider>),
	 document.getElementById('root')
);	



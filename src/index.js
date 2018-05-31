import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter,
		 Route,
		 Switch
} from 'react-router-dom'
import reducer from './reducer'
import thunk from 'redux-thunk'
import Auth from './Auth'
import Dashboard from './Dashboard'

let store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))


ReactDOM.render(
	(<Provider store = {store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" exact component={Auth}></Route>
					<Route path="/dashboard" component={Dashboard}></Route>
				</Switch>
				
			</div>
		</BrowserRouter>
	</Provider>),
	 document.getElementById('root')
);	



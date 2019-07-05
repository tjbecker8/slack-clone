import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './signup'
import App from './App'


class Routes extends Component {
	//data
state = {}
	//functions

	//render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/app" component={App} />
					<Route path="/" component={Signup} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes;

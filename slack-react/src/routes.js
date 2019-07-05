import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './signup'
import	App from './App'


class Routes extends Component {
	//data
state = {}
	//functions



	//render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/signup" component={Signup} /> //will render signup compnent to the ui
					<Route patth="/app" component={App} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes;

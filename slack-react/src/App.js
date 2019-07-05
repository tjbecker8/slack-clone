import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Sidebar from './sidebar'
import Content from './Content'
import Signup from './signup'
class App extends Component {
	//data
	state = {
		channel: ''
	}
	//functions
	getMessages = (id) => {
		console.log('id', id);
		console.log('state', this.state);
		this.setState({
			channel: id
		}, () => {
			console.log('<<<<<<', this.state)
		})

	}



	//render
	render() {
		return (
			<Signup />
	
		)
	}
}



export default App;

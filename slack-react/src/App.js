import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Sidebar from './sidebar'
import Content from './Content'
class App extends Component {
	//data
	state = {
		 channel: ''
	}
	//functions
	channelCallback = (id) => {
		this.setState({channel: id})
		console.log('test',this.state);
		}



	//render
	render() {
		return (
			<div id="wrap">
				<Sidebar channelCallback={this.channelCallback}  />
				<Content channel={this.state.channel}/>
			</div>
		)
	}
}



export default App;

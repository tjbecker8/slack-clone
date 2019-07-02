import React, {Component} from 'react';
import './sidebar.css';

class Channel extends Component {
	//data
	state = {
		channel: this.props.channel
	}

	//functions

	//render
	render() {
		return (
			<li onClick={()=> this.props.selectChannel()} className="active"># {this.state.channel.name}</li>
		)
	}
}



export default Channel;

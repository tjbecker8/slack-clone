import React, {Component} from 'react';
import './sidebar.css';
import Channel from './Channel'
class Sidebar extends Component {
	//data
	state = {
		workspace: 'Tortuga Coders',
		channels: [
			{
				id: 1,
				name: 'general'
			},
			{
				id:2,
				name: 'programming'
			}, {
				id:3,
				name: 'random'
			}
		]
	}
	//functions
	selectChannel = () => {
		console.log('YO');
	}
	//render
	render() {
		return (

			<div id="sidebar">
				<h2>{this.state.workspace}</h2>
				<h3>Channels</h3>
				<ul className="list-unstyled">
					{
						this.state.channels.map((c) => {
							return <Channel channel={c} key={c.id} selectChannel={this.selectChannel} />
						})
					}
				</ul>
			</div>


		)
	}
}



export default Sidebar;

import React, {Component} from 'react';
import './content.css';
import Message from './Message'
class Content extends Component {
	//data
	state = {
		messages: [
			{
				id: 1,
				author: 'john smith',
				date: '2/7/2019 - 7am',
				body: 'hello world'
			},
			{
				id: 1,
				author: 'john smith',
				date: '2/7/2019 - 8am',
				body: 'hello world'
			}, {
				id: 1,
				author: 'john smith',
				date: "2/7/2019 - 9am",
				body: 'hello world'
			}
		]
	}
	//functions
	//render
	render() {
		return (
			<div id="content">
				<div id="messages">
					{
						this.state.messages.map((m)=> {
							return <Message />
						})
					}

				</div>
				<div id="new-messages">

					<div className="input-group mb-3">
						<input type="text" className="form-control" />
						<div className="input-group-append">
							<button className="btn btn-success" type="submit" >Send</button>
						</div>
					</div>

				</div>
			</div>


		)
	}
}



export default Content;

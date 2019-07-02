import React, {Component} from 'react';
import './content.css';
import Message from './Message'
class Content extends Component {
	//data
	state = {
		messages: [
			{
				id: 1,
				author: 'Tom',
				date: '2/7/2019 - 04:00',
				body: 'I got up at 4am'
			},
			{
				id: 2,
				author: 'Tom',
				date: '2/7/2019 - 07:30',
				body: 'so I went with edgar and got a great breakie'
			}, {
				id: 3,
				author: 'Tom',
				date: '2/7/2019 - 09:41',
				body: 'Now I want a nap'
			},
			{
				id: 4,
				author: 'Tom',
				date: '2/7/2019 - 10:28',
				body: 'this sucks that I can only say f*** a limited number of times a day'
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
							return <Message message={m} key={m.id} />
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

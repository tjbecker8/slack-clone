import React, {Component} from 'react';
import './content.css';
import Message from './Message'
import NewMessage from './NewMessage'
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
			},
			{
				id: 5,
				author: 'Tom',
				date: '2/7/2019 - 14:04',
				body: 'I have only said f*** 5 times today'
			}
		]
	}
	//functions
	createMessage = (e, text) => {
		e.preventDefault()
		let message = {
			id: 7,
			author: 'Tom',
			body: text,
			date: 'date'
		}
		console.log(message)
		let messages = this.state.messages
		messages.push(message)
		this.setState({messages})

	}
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
				<NewMessage  createMessage={this.createMessage} />
			</div>


		)
	}
}



export default Content;

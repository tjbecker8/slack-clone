import React, {Component} from 'react';
import './content.css';
import Message from './Message'
import NewMessage from './NewMessage'

import axios from 'axios'
class Content extends Component {
	//data
	state = {
		messages: [],
		channel: ''
	}
	//functions

	componentWillMount() {

		axios.get('http://localhost:4000/api/messages').then((res)=> {
			console.log(res.data);
			this.setState({
				messages: res.data
			})
		}).catch((err)=> {
			console.log('err', err);
		})
	}

componentWillReceiveProps(props) {
	console.log('pr', props);
	axios.get(`http://localhost:4000/api/messages?channel=${props.channel}`).then((res)=> {
		console.log('res', res.data);
		this.setState({
			messages: res.data
		})
	}).catch((err)=> {
		console.log('err', err);
	})
}


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
							return <Message message={m} key={m._id} />
						})
					}

				</div>
				<NewMessage  createMessage={this.createMessage} />
			</div>

		)
	}
}



export default Content;

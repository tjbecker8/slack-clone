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
	this.setState({
		channel: props.channel
	})
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
				body: text,
				channel: this.state.channel,
				token: localStorage.getItem('token')
			}
			console.log('iiiii',message)
			axios.post('http://localhost:4000/api/messages', message).then((res)=> {
				console.log('res>>>>', res.data);
			})

		let messages = this.state.messages

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

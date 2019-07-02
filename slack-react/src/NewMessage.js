import React, {Component} from 'react';
import './content.css';
class NewMessage extends Component {
	//data

	//functions
	createMessage = (e) => {
		e.preventDefault()
		console.log('HELLO')
	}
	//render
	render() {
		return (
			<div id="new-messages">
				<form onSubmit= {(e) => this.createMessage(e)}>
					<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="new message" />
						<div className="input-group-append">
							<button className="btn btn-success" type="submit" >Send</button>
						</div>
					</div>
				</form>
			</div>


		)
	}
}



export default NewMessage;

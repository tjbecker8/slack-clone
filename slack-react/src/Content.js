import React, {Component} from 'react';
import './content.css';
import Message from './Message'
class Content extends Component {
	//data
	//functions
	//render
	render() {
		return (
			<div id="content">
				<div id="messages">
					<Message />
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

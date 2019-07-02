import React, {Component} from 'react';
import './content.css';
class NewMessage extends Component {
	//data

	//functions
	//render
	render() {
		return (
			<div id="new-messages">

				<div className="input-group mb-3">
					<input type="text" className="form-control" />
					<div className="input-group-append">
						<button className="btn btn-success" type="submit" >Send</button>
					</div>
				</div>

			</div>


		)
	}
}



export default NewMessage;

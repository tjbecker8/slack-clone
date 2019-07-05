import React, {Component} from 'react';
import './sidebar.css';

class Signup extends Component {
	//data
	state = {
		name: '',
		email: '',
		password: '',
	}

	//functions
changeName = (e) => {
	this.setState({name: e.target.value})
}

changeEmail = (e) => {
	this.setState({email: e.target.value})
}

changePassword = (e) => {
	this.setState({password: e.target.value})
}


	//render
	render() {
		return (
			<div className="row">
				<div className="col-sm-4 offset-4">
					<div className="card signup">
						<div className="card-body">
							<form>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={(e)=> this.changeName(e)}/>
								</div>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="email" value={this.state.email} onChange={(e) => this.changeEmail(e)}/>
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={(e) => this.changePassword(e)}/>
								</div>
								<button className="btn btn-primary">Signup</button>
							</form>

						</div>
					</div>
				</div>
			</div>
		)
	}
}



export default Signup;

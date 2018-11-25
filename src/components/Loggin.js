import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authUser';

class Loggin extends Component {
	state = {
		userId: ''
	};
	handleChange = e => {
		this.setState({
			userId: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		const userId = this.state.userId
			? this.state.userId
			: this.props.users[0].id;
		this.props.dispatch(setAuthedUser(userId));
	};
	render() {
		const { users } = this.props;
		return (
			<div className="mui-container loggin-form-center">
				{users.length > 0 && (
					<form className="mui-form" onSubmit={this.handleSubmit}>
						<div className="mui-select">
							<select
								value={this.state.userId}
								onChange={this.handleChange}
							>
								{users.map(user => (
									<option key={user.id} value={user.id}>
										{user.id}
									</option>
								))}
							</select>
							<label>Select User</label>
						</div>
						<button
							className="mui-btn mui-btn--raised mui-btn--primary"
							type="submit"
						>
							Submit
						</button>
					</form>
				)}
			</div>
		);
	}
}
function mapStateToProps({ users }) {
	return {
		users: Object.keys(users).map(key => users[key])
	};
}

export default connect(mapStateToProps)(Loggin);

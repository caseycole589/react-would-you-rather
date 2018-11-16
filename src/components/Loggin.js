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
		this.props.dispatch(setAuthedUser(this.state.userId));
	};
	render() {
		const { users } = this.props;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<strong>Select User:</strong>
					<select
						value={this.state.userId}
						onChange={this.handleChange}
					>
						{users &&
							users.map(user => (
								<option key={user.id} value={user.id}>
									{user.id}
								</option>
							))}
					</select>
					<button type="submit">Submit</button>
				</form>
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

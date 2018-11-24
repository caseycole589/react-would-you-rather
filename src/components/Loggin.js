import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authUser';

const space = {
	margin: '10px'
};
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
			<div className="loggin-form-center">
				<form onSubmit={this.handleSubmit}>
					<strong style={space}>Select User:</strong>
					<select
						style={space}
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authUser';

class Main extends Component {
	logOut = () => {
		console.log('logging out');
		this.props.dispatch(setAuthedUser(null));
	};
	render() {
		return (
			<div className="flex row space-around">
				<NavLink to="/" exact>
					Home
				</NavLink>
				<NavLink to="/questions/add" exact>
					New Question
				</NavLink>
				<div> Leader Board</div>
				<div>
					<button onClick={this.logOut}>Log Out</button>
					<span style={{ marginLeft: '20px' }}>
						{this.props.authUser}
					</span>
				</div>
			</div>
		);
	}
}
function mapStateToProps({ authUser }) {
	return {
		authUser
	};
}

export default connect(mapStateToProps)(Main);

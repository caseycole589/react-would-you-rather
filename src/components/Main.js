import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authUser';

const usersAndQuestions = (users, questions) => (
	<div className="flex row">
		<div>
			<h2>Users</h2>
			<div className="flex column">
				{users &&
					users.map(user => (
						<div key={user.id}>
							<strong>User:</strong> {user.name}
						</div>
					))}
			</div>
		</div>
		<div>
			<h2>Questions</h2>
			<div className="layout vertical">
				{questions &&
					questions.map(question => (
						<div key={question.id}>
							<strong>question author:</strong>
							{question.author}
						</div>
					))}
			</div>
		</div>
	</div>
);
class Main extends Component {
	logOut = () => {
		console.log('logging out');
		this.props.dispatch(setAuthedUser(null));
	};
	render() {
		const { users, questions } = this.props;
		return (
			<div className="flex row space-around">
				<NavLink to="/" exact>
					Home
				</NavLink>
				<NavLink to="/questions/add" exact>
					New Question
				</NavLink>
				<div> Leader Board</div>
				{/*usersAndQuestions(users, questions)*/}
				<button onClick={this.logOut}>Loggout</button>
			</div>
		);
	}
}
function mapStateToProps({ users, questions, authUser }) {
	return {
		questions: Object.keys(questions).map(key => questions[key]),
		users: Object.keys(users).map(key => users[key]),
		authUser
	};
}

export default connect(mapStateToProps)(Main);

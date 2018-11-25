import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
	render() {
		const { sortedUsers } = this.props;
		return (
			<div className="container">
				{sortedUsers &&
					sortedUsers.map(user => (
						<div key={user.id} className="shadow">
							<div className="flex row">
								<img
									src={`images/${user.avatarURL}`}
									alt="avatar"
								/>
								<div
									className="flex column"
									style={{ width: '165px' }}
								>
									<h2 style={{ margin: '5px' }}>{user.id}</h2>
									<div className="flex row center space-between">
										<h5>Answered Questions: </h5>
										{user.answerVotes}
									</div>
									<div className="flex row center space-between">
										<h5>Unanswered Questions: </h5>
										{user.questions.length}
									</div>
									<div className="flex row center space-between">
										<h5>Score: </h5>
										{user.totalVotes}
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		);
	}
}
function mapStateToProps({ users }) {
	const sortedUsers = Object.values(users)
		.map(user => {
			const answerVotes = Object.values(user.answers).length;
			const totalVotes = answerVotes + user.questions.length;
			return {
				...user,
				totalVotes,
				answerVotes
			};
		})
		.sort((a, b) => b.totalVotes > a.totalVotes);
	return {
		sortedUsers
	};
}

export default connect(mapStateToProps)(LeaderBoard);

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
										<h5>Created Questions: </h5>
										{user.questions.length}
									</div>
									<div className="flex row center space-between">
										<h5>Score: </h5>
										{user.questions.length +
											user.answerVotes}
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
			return {
				...user,
				answerVotes
			};
		})
		.sort((a, b) => b.answerVotes - a.answerVotes);
	return {
		sortedUsers
	};
}

export default connect(mapStateToProps)(LeaderBoard);

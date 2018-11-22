import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnsweredQuestion from './AnsweredQuestion';
import UnAnsweredQuestion from './UnAnsweredQuestion';
class QuestionMaster extends Component {
	render() {
		const id = this.props.match.params.id;
		const { questions, authUser } = this.props;
		const question = questions[id];
		if (!question) {
			return <div>404 Question was not found</div>;
		}

		const authorVoted =
			question.optionOne.votes.includes(authUser) ||
			question.optionTwo.votes.includes(authUser);

		if (authorVoted) {
			return (
				<AnsweredQuestion
					id={id}
					question={question}
					authUser={authUser}
				/>
			);
		} else {
			return (
				<UnAnsweredQuestion
					id={id}
					question={question}
					authUser={authUser}
				/>
			);
		}
	}
}

function mapStateToProps({ users, questions, authUser }) {
	return {
		authUser,
		questions
	};
}

export default connect(mapStateToProps)(QuestionMaster);
